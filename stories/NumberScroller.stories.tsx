import { RenderFunction, storiesOf } from "@storybook/react";
import * as React from "react";

import { NumberScroller } from "../src/Components/NumberScroller/NumberScroller";

function CenterDecorator(story: RenderFunction): JSX.Element {
    return <div style={{ margin: 100 }}>{story()}</div>;
}

storiesOf("NumberScroller", module)
    .addDecorator(CenterDecorator)
    .add("Default", () => <NumberScroller />);
