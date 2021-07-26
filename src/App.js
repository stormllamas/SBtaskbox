import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './lib/redux';

import './App.css';

import InboxScreen from './components/InboxScreen';



const App = () =>{
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
