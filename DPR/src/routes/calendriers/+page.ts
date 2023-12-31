import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase';

const profile = await supabase.auth.getSession();
console.log('🚀 ~ file: +page.ts:5 ~ profile:', profile.data.session?.user);
const { data, error } = await supabase
	.from('user_calendars')
	.select('*')
	.eq('id_user', profile.data.session?.user.id);
console.log('🚀 ~ file: +page.ts:7 ~ userCalendars:', data, error);
export const load = (async () => {
	return {};
}) satisfies PageLoad;
