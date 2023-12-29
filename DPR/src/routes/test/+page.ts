import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase';

// const { error } = await supabase.auth.signUp({
// 	email: 'mrguerrilla@gmail.com',
// 	password: 'password'
// });
// const { data, error } = await supabase.auth.signInWithPassword({
// 	email: 'mrguerrilla@gmail.com',
// 	password: 'password'
// });
// supabase.functions.setAuth(data.session?.access_token);
console.log(data.session);
// const { data, error } = await supabase
// 	.from('calendar')
// 	.select()
// 	.eq('user_calendars.id_user', data.session?.id_user);
// console.log('🚀 ~ file: +page.ts:14 ~ data:', data);
export const load = (async () => {
	return {};
}) satisfies PageLoad;
