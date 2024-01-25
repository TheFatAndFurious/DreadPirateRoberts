import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase';
import { userProfile } from '../../stores/userStore';

const profile = await supabase.auth.getSession();

const [calendars, userCalendars] = await Promise.all([
	supabase.from('calendar').select('*'),
	supabase
		.from('user_calendars')
		.select('*')
		.eq('id_user', profile.data.session?.user.id)
]);
console.log(userProfile);
export const load = (async () => {
	return {
		userCalendars: userCalendars.data,
		calendars: calendars.data
	};
}) satisfies PageLoad;
