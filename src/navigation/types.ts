export enum SCREENS {
  WELCOME = "WELCOME",
  LOGIN = "LOGIN",
  HOME = "HOME",
  CREATE_ACCOUNT = "CREATE_ACCOUNT",
}

export type RouteNavigationParams = {
  [SCREENS.WELCOME]: undefined;
  [SCREENS.CREATE_ACCOUNT]: undefined;
  [SCREENS.LOGIN]: undefined;
  [SCREENS.HOME]: undefined;
};
