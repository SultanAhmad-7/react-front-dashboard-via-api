import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header />
       <h1>Welcome in Learning React</h1>
       <Route path="login">
          Login
       </Route>
       </BrowserRouter>
    </div>
  );
}

export default App;
