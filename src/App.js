import './App.css';
import Login from 'pages/Login';
import Header from './components/Header';
import { UserContextProvider } from 'context/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <Login />
      </UserContextProvider>
    </div>
  );
}

export default App;
