import { supabase } from '$lib/supabase';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	console.log(params.id);
	const { data, error } = await supabase.from('events').select('*').eq('id_calendar', params.id);

	return { calendar: data };
}) satisfies PageLoad;
