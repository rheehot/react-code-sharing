import rnFirebaseAnalytics from "@react-native-firebase/analytics";

import { firebaseAnalyticsFactory } from "@shared/configs/analytics";
import { createInjectDecorator } from "@shared/decorators/createInjectDecorator";
import { once } from "@shared/utils/common";

export function initialize() {
  rnFirebaseAnalytics().setAnalyticsCollectionEnabled(true);
}

export const firebaseAnalytics = once(() => {
  const logEvent = (eventName: string, params: object) => {
    rnFirebaseAnalytics().logEvent(eventName, params);
  };
  const setUserId = (userId: string) => {
    rnFirebaseAnalytics().setUserId(userId);
  };
  const setCurrentScreen = (screenName: string) => {
    rnFirebaseAnalytics().setCurrentScreen(screenName);
  };
  return firebaseAnalyticsFactory(logEvent, setUserId, setCurrentScreen);
});

export function firebaseTracking<IProps, IStates>(
  trackingConsumer: (
    props: IProps,
    state: IStates,
    event: typeof firebaseAnalytics,
    args: any[]
  ) => void
): any {
  const func = async (props: IProps, state: IStates, args: any[]) => {
    trackingConsumer(props, state, firebaseAnalytics, args);
  };
  return createInjectDecorator(func);
}
