// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Header from './Header';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login from './Login';
import Register from './Register';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <h1>Welcome in Learning React</h1>
        <Routes>
        <Route path="/addproduct" element= {<AddProduct />}>
          
        </Route>
        <Route path="/updateproduct" element={ <UpdateProduct /> }>
          
        </Route>
        
          <Route path="/login" element={  <Login />}>
          
          </Route> 
        
        
        <Route path="/register" element={<Register />}>
          
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
