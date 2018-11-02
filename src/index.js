import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import App from './containers/App';
import GlobalColors from './styles/settings/colors';

ReactDOM.render(
<Provider store={store}>
  <Fragment>
    <GlobalColors />  
    <App />
  </Fragment>
</Provider>,
document.getElementById('root'));
