import { NavigationState } from "react-navigation";
import { FormStateMap } from "redux-form";

import { Action } from "../actions/types";
import { AppState } from "./appState";
import { LoadingState } from "../store/reducers/loading";
import { ErrorState } from "../store/reducers/error";
import { SessionState } from "../store/reducers/session";
import { OnboardingState } from "../store/reducers/onboarding";
import { ProfileState } from "../store/reducers/profile";
import { NormalizedMessages } from "../store/reducers/messages";


export type NetworkState = Readonly<{
  isConnected: boolean;
  actionQueue: ReadonlyArray<Action>;
}>;

export type GlobalState = Readonly<{
  appState: AppState;
  network: NetworkState;
  navigation: NavigationState;
  loading: LoadingState;
  error: ErrorState;
  form: FormStateMap;
  session: SessionState;
  onboarding: OnboardingState;
  profile: ProfileState;
  messages: NormalizedMessages;
}>;
