import React from 'react';
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import { data1 , data2 } from './data';
import './App.css';
// import './css/fonts.css';

function App() {
  return (
    <div className='container'>
      
    {data1.map(item => {
      const {   desc, title, id } = item;
      return <Comp1 key={id} id={id}  desc={desc} title={title}/>
    })}
     {data2.map(item => {
      const {   desc, title, id, name, imagSrc } = item;
      return <Comp2 key={id} name={name}  desc={desc} title={title}  imagSrc={imagSrc}/>
    })}
 
  </div>
  );
}

export default App;
