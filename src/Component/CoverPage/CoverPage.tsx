import * as React from "react";
import { Link } from "react-router-dom";

import { generateRandomPoemId } from "../../PoemGenerator";

import cn from "./CoverPage.less";

interface CoverPageProps {
    className?: string;
}

export class CoverPage extends React.Component<CoverPageProps> {
    public render(): JSX.Element {
        return (
            <div className={cn(this.props.className, "container")}>
                <div className={cn("root")}>
                    <div className={cn("upper-curly")}>
                        <div className={cn("border")} />
                    </div>
                    <div className={cn("header")}>
                        <div className={cn("line-1")}>Сто тысяч</div>
                        <div className={cn("line-2")}>миллиардов</div>
                        <div className={cn("line-3")}>стихотворений</div>
                    </div>

                    <div className={cn("link")}>
                        <Link to={`/${generateRandomPoemId()}`}>Читать случайное</Link>
                    </div>

                    <div className={cn("bottom-curly")}>
                        <div className={cn("border")} />
                    </div>
                </div>
            </div>
        );
    }
}
