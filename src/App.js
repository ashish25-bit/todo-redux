import './App.css';
import Main from './components/Main';

// redux store
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
