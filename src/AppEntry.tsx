import * as React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

export class AppEntry extends React.Component<{}> {
    public render(): JSX.Element {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={CoverPage} />
                    <Route exact path="/:id" component={PoemPage} />
                </Switch>
            </HashRouter>
        );
    }
}

function CoverPage(): JSX.Element {
    return <div>Hi</div>;
}

function PoemPage(props): JSX.Element {
    return <pre>
        {JSON.stringify(props, null, "  ")}
    </pre>
}
