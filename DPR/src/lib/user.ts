import { supabase } from './supabase';
export async function controlIsLoggedIn() {
	const { data } = await supabase.auth.getSession();

	if (!data.session) {
		console.log('et ta soeur');
		return null;
	}
	supabase.functions.setAuth(data.session.access_token);
	console.log('bitch waddup');
	return data.session;
}
