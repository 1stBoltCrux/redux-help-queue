import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ticketListReducer from './reducers/ticket-list-reducer';
import selectedTicketReducer from './reducers/selected-ticket-reducer';
import rootReducer from './reducers/index';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';



const store = createStore(rootReducer);

let unsubscribe = store.subscribe(() =>
console.log(store.getState())
);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Provider store={store}>
          <Component/>
        </Provider>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
/*eslint-enable */
