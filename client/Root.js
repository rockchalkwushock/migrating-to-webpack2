import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-redux-multilingual';
import ReduxToastr from 'react-redux-toastr';
import { store } from './redux/store';
import Routes from './routes';
import { translations } from './modules';

const Root = () => (
  <Provider store={store}>
    <IntlProvider translations={translations}>
      <div className='provider'>
        <Routes />
        <ReduxToastr
          timeOut={1500}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          transitionIn="bounceIn"
          transitionOut="bounceOut"
          progressBar
        />
      </div>
    </IntlProvider>
  </Provider>
);

export default Root;
