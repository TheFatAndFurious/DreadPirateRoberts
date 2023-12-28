import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase';

const { data } = await supabase.from('test').select('*');
console.log('🚀 ~ file: +page.ts:5 ~ data:', data);
const { error } = await supabase.auth.signUp({
	email: 'test@yopmail.com',
	password: 'password'
});
export const load = (async () => {
	return {
		data
	};
}) satisfies PageLoad;
