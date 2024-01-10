import { supabase } from './supabase';
export async function controlIsLoggedIn() {
	const { data } = await supabase.auth.getSession();

	if (!data.session) {
		return null;
	}
	supabase.functions.setAuth(data.session.access_token);
	return data.session;
}
