import { controlIsLoggedIn } from '$lib/user';
import type { LayoutLoad } from './$types';
import { userProfile } from '../stores/userStore';

export const load = (async () => {
	const session = await controlIsLoggedIn();
	userProfile.set(session);
	return { session };
}) satisfies LayoutLoad;
