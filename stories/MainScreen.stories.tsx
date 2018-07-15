import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { MainScreen } from "../src/Components/MainScreen/MainScreen";

storiesOf("MainScreen", module).add("Default", () => (
    <MainScreen startWeight={91.2} targetWeight={75.0} reports={[]} onAddReport={action("onAddReport")} />
));
