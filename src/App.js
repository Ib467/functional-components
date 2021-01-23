// import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter';
// import NewCounter from './components/NewCounter';
// import RandomList from './components/RandomList';

import Product from './components/Product';
import ShoppingCart from './contexts/ShoppingCart'
import Wrapper from './components/Wrapper'
import MiniCart from './components/MiniCart'

function App() {
  return (

      <ShoppingCart.Provider 
      value={[
        {
          title: 'Toothpaste',
          brand: 'Charcoal',
          price: 35,
          quantity: 1
        }
      ]}>


      {/* <Counter color="red" initialCount={10}/>
      <Counter color="green" initialCount={50}/>
      <Counter color="blue"/>
      <Counter color="purple"/>
      <NewCounter /> */}

      {/* <RandomList title="This is my random List" /> */}

      <Product />
      <Wrapper>
        <Wrapper>
          <MiniCart />
        </Wrapper>
      </Wrapper>

    </ShoppingCart.Provider>
  );
}

// const myInstance = new Counter();
// const myInstance = React.createElement(Counter, {}, null)

export default App;
