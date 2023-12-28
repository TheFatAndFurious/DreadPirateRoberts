import { createClient } from '@supabase/supabase-js';
import { env } from './env';
export const supabase = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_KEY);
