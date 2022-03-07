
import './App.css';

import { Products } from './components/products';
import { Cart } from './components/cart';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Save } from './components/save';
import { Check } from './components/checkout';
function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Products/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/save' element={<Save/>}></Route>
          <Route path='/checkout' element={<Check/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
