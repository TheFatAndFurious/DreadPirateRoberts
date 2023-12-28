import { env as svelteEnv } from '$env/dynamic/public';

export const env = {
	PUBLIC_SUPABASE_URL: svelteEnv.PUBLIC_SUPABASE_URL || '',
	PUBLIC_SUPABASE_KEY: svelteEnv.PUBLIC_SUPABASE_ANON_KEY || ''
};
