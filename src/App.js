import React from 'react';
import logo from './logo.svg';
import './App.css';
import fakeData from './fakeData/Fakedata';
import { useState } from 'react';
import Course from './components/Cours/Cours';
import Cart from './components/Cart/Cart';
import CardD from './components/cardD/CardD';



function App() {


  // const [CardD, setCardD] = useState([])
  //   const handleAddproduct = (car) =>{
  //       const newCardD = [...CardD, car];
  //       setCardD(newCardD);
  //   }


  const [cart, setcart] = useState([]);

  const handleAddproduct = (product) =>{
    const newCart = [...cart,product];
    setcart(newCart);

  }
  const [cours,setCours] = useState(fakeData)


  return (
    <div className="container d-flex">
      
      <div className="row" style={{width: '75%'}}>
      {
          cours.map(cours =><Course 
            handleAddproduct = {handleAddproduct}
            product={cours}></Course>)

    } 



      </div>
      <div style={{width: '25%'}}>
        <Cart cart={cart}></Cart>
        {
           cart.map(cradd => <CardD CardD={cradd}></CardD>)
         }
      </div>
    </div>
  );
}

export default App;
