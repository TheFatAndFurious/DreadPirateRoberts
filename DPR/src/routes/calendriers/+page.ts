import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase';

const { data, error } = await supabase.from('calendar').select();

export const load = (async () => {
	return { data };
}) satisfies PageLoad;
