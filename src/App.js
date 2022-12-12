import './App.css';
import { AddtoCart, RemoveFrom_CART,EmptyCART } from './redux/Action';
import { useDispatch } from 'react-redux';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  const products = {
    name: "iPhone",
    type: "Apple",
    price: 100000,
    color: "red"
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <button onClick={()=> dispatch(AddtoCart(products))}>Add to Cart</button>
        <button onClick={()=> dispatch(RemoveFrom_CART(products.name))}>Remove From Cart</button>
        <button onClick={()=> dispatch(EmptyCART())}>Empty Cart</button>
      </header>
    </div>
  );
}

export default App;
