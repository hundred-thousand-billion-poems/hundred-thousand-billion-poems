import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

import { generateRandomPoemId, getPoemById } from "../../PoemGenerator";

import cn from "./PoemPage.less";

interface PoemPageProps extends RouteComponentProps<{ id: string }> {
    className?: string;
}

export class PoemPage extends React.Component<PoemPageProps> {
    public render(): JSX.Element {
        const poemId = this.props.match.params.id;
        const lines = getPoemById(poemId);
        return (
            <div className={cn(this.props.className, "root")}>
                <div className={cn("lines-wrapper")}>
                    <div className={cn("lines")}>
                        {lines.map((line, x) => (
                            <span key={x} className={cn(`line-${x}`)}>
                                {line}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={cn("link")}>
                    <Link to={`/${generateRandomPoemId()}`}>Следующее</Link>
                </div>
            </div>
        );
    }
}
