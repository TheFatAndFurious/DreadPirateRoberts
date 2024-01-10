import { supabase } from '$lib/supabase';
import { controlIsLoggedIn } from '$lib/user';
import type { LayoutLoad } from './$types';

export const load = (async () => {
	const { data, error } = await supabase.from('events').select('*');
	const session = await controlIsLoggedIn();
	return { session, testRefetch: data };
}) satisfies LayoutLoad;
