import { configure } from '@storybook/react';
import "../src/Styles/Reset.less";
import "../src/Styles/Typography.less";

const req = require.context('../stories', true, /.stories.(js|tsx)$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
