import * as React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import * as CSSTransition from "react-transition-group/CSSTransition";
import TransitionGroup from "react-transition-group/TransitionGroup";

import cn from "./AppEntry.less";
import { CoverPage } from "./Component/CoverPage/CoverPage";
import { PoemPage } from "./Component/PoemPage/PoemPage";

export class AppEntry extends React.Component<{}> {
    public render(): JSX.Element {
        return (
            <HashRouter>
                <Route path={"/"}>
                    {({ location }) => (
                        <TransitionGroup className={cn("root")}>
                            <CSSTransition
                                key={location.pathname}
                                classNames={{
                                    enter: "enter",
                                    enterActive: "enter-active",
                                }}
                                timeout={{
                                    enter: 3000,
                                    exit: 500,
                                }}>
                                <Switch location={location}>
                                    <Route exact path="/" render={() => <CoverPage className={cn("div")} />} />
                                    <Route
                                        exact
                                        path="/:id"
                                        render={options => <PoemPage {...options} className={cn("div")} />}
                                    />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )}
                </Route>
            </HashRouter>
        );
    }
}
