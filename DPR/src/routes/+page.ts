import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase';

async function get_events_for_single_user () {
	let user_events;
	let profile;
	try {
		profile = await supabase.auth.getSession();
		console.log("=>(+page.ts:9) profile", profile);
		if (profile.data.session === null){
			throw new Error("User not logged in")
		}
	} catch (error) {
		console.error("Couldn't fetch user profile", error);
		return [];
	}
	if (!profile.data.session) {
		return ;
	} else {
		try {
			 user_events = await supabase.from('user_events').select('id_event').eq('id_user', profile.data.session?.user.id)
		} catch (error) {
			console.error("Couldn't fetch user_events at step 2", error);
			return [];
		}
	const valuesOnlyFromUserEevents: readonly never[] = user_events.data?.map((item:any) => item.id_event)
		try {
			const getEvents = await supabase.from('events').select('*').in('id', valuesOnlyFromUserEevents)
			return getEvents;
		} catch (error){
			console.error("Couldn't fetch events at step 3", error)
			return [];
		}
	}
}

export const load = (async () => {
	return {
		events: await get_events_for_single_user()
	};
}) satisfies PageLoad;
