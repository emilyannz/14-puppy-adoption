// Create `index` module that exports a function to kick things off
'use strict';
import AppView from 'app-view';

export default function () {
  const appView = new AppView(document.querySelector(`body`));
}
