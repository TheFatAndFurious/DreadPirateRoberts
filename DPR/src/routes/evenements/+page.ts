import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase';

const profile = await supabase.auth.getSession();

const [events, userEvents, calendars] = await Promise.all([
	supabase.from('events').select('*'),
	supabase
		.from('user_events')
		.select('id_event')
		.eq('id_user', profile.data.session?.user.id),
	supabase.from('calendar').select('*')
]);
export const load = (async () => {
	return {
		events: events.data,
		userEvents: userEvents.data,
		calendars: calendars.data
	};
}) satisfies PageLoad;
