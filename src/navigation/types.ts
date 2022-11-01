export enum SCREENS {
	LOGIN = 'LOGIN',
	HOME = 'HOME',
}

export type RouteNavigationParams = {
	[SCREENS.LOGIN]: undefined;
	[SCREENS.HOME]: undefined;
};
