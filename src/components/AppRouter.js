import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {privateRoutes, publicRoutes} from "../routes";
import {observer} from "mobx-react-lite";
import AuthStore from "../store/AuthStore";

const AppRouter = observer(() => {
    return AuthStore.auth ? (
        <Switch>
            {privateRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true}/>
            )}
            <Redirect to={CHAT_ROUTE}/>
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true}/>
            )}
            <Redirect to={LOGIN_ROUTE}/>
        </Switch>
    )
});

export default AppRouter;