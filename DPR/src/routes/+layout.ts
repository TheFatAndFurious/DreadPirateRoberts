import { supabase } from '$lib/supabase';
import type { LayoutLoad } from './$types';

const data = await supabase.auth.getSession();
console.log('🚀 ~ file: +layout.ts:5 ~ data:', data);

export const load = (async () => {
	return { data };
}) satisfies LayoutLoad;
