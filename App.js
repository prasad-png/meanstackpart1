import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

  const App = (props) =>{
  const player='rishubh pant'
  const role='batsmen'
  const team='india'
  const runs=148
  const matches=4
  /*variables*/ 
  const x=88
  const y=99
  console.log(x,y)
  /*we always type javascript above the return statement */
    /*functions*/
  const great=(p1,p2)=>{
      const p3=p1+p2 
         return p3 
}
/*objects*/
const r2={
bowling:"left-arm",
bowlingstyle:'googly',
wickets:0,
maiden:0,
extras:0,
}
const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )



  
  
  
  return (
    <div>
      
<h1>rishubh pant</h1>
<h2>career:</h2>
<p>name: {player}   </p>
<p>role: {role}   </p>
<p>team: {team}   </p>
<p>runs: {runs}   </p>
<p>matches:{matches}</p>
<p>{great(1,2)}</p>
<p>rishabhpant was a wicket-keeper batsmen</p>
<p></p>


<p>rishubh pant is a young bloke who could hit balls out of the park.he came into limelight in 2012,where he had 100 in just 36 balls </p>
<p>Since then he never looked back.Later he was picked by delhi daredevils in 2016.he never missed his chances.he hit 97 runs against gujaratlions.</p>
<hr></hr>

<hr></hr>
<p>bowling:{r2.bowling}</p>
<p>bowling-style:{r2.bowlingstyle}</p>
<p>wickets:{r2.wickets}</p>
<p>maiden:{r2.maiden}</p>
<p>extras:{r2.extras}</p>   
<p>{counter}</p>   
    
    
    </div>
  )
}
  export default App;
