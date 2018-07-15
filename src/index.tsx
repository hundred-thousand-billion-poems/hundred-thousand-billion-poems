import * as React from "react";
import * as ReactDom from "react-dom";

import { AppEntry } from "./AppEntry";

import "./Styles/Reset.less";
import "./Styles/Typography.less";

ReactDom.render(<AppEntry />, document.getElementById("content"));
