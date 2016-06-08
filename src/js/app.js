import React from 'react'
import ReactDOM from 'react-dom'
import configStore from './store/configStore';
import App from './containers/App';

const store = configStore();

const render = ()=> {
  ReactDOM.render(
    <App store={store}/>, document.querySelector('#app')
  )
}

render();
store.subscribe(() => {
  render();
});

