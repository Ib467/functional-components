// import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter';
// import NewCounter from './components/NewCounter';
// import RandomList from './components/RandomList';

import Product from './components/Product';

function App() {
  return (
    <div className="App">
      {/* <Counter color="red" initialCount={10}/>
      <Counter color="green" initialCount={50}/>
      <Counter color="blue"/>
      <Counter color="purple"/>
      <NewCounter /> */}

      {/* <RandomList title="This is my random List" /> */}

      <Product />
    </div>
  );
}

// const myInstance = new Counter();
// const myInstance = React.createElement(Counter, {}, null)

export default App;
