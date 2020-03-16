import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./lib/history";
import Main from "./pages/Main";
import Jsx from "./pages/Jsx";
import Immutability1 from "./pages/Immutability1";
import Immutability2 from "./pages/Immutability2";
import Immutability3 from "./pages/Immutability3";
import UseEffectDidMount from "./pages/use-effect-did-mount";
import UseEffectUnmount from "./pages/use-effect-unmount";
import UseEffectReactive from "./pages/use-effect-reactive";
import UseEffectInfinityRendering from "./pages/use-effect-infinity-rendering";
import ConditionalRendering from "./pages/conditional-rendering";
import UseMemo from "./pages/use-memo";
import Memo from "./pages/memo";

export default function() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/jsx" component={Jsx} />
        <Route path="/immutability1" component={Immutability1} />
        <Route path="/immutability2" component={Immutability2} />
        <Route path="/immutability3" component={Immutability3} />
        <Route path="/use-effect-did-mount" component={UseEffectDidMount} />
        <Route path="/use-effect-unmount" component={UseEffectUnmount} />
        <Route path="/use-effect-reactive" component={UseEffectReactive} />
        <Route
          path="/use-effect-infinity-rendering"
          component={UseEffectInfinityRendering}
        />
        <Route path="/conditional-rendering" component={ConditionalRendering} />
        <Route path="/use-memo" component={UseMemo} />
        <Route path="/memo" component={Memo} />
      </Switch>
    </Router>
  );
}
