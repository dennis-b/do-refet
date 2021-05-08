import { useEffect } from 'react';
import { navigationState } from "@shared/state";
import { getActiveRouteName } from "@utils/navigationUtils";
import { useSetRecoilState } from "recoil";
import { useHistory } from "react-router";

export const NavigationListener = () => {

  const history = useHistory();
  const setNavState = useSetRecoilState(navigationState)

  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      setNavState(getActiveRouteName())
    });
    return () => unlisten()
  }, [history, setNavState])

  return null;
};
