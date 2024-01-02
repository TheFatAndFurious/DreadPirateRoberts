import { controlIsLoggedIn } from '$lib/user';
import type { LayoutLoad } from './$types';

export const load = (async () => {
	const session = await controlIsLoggedIn();
	return { session };
}) satisfies LayoutLoad;
