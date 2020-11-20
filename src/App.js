import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Kaynak from './components/Kaynak';
import Program from './components/Program';

function App() {
  const [clicka, setclicka] = useState(false);
  const [clickb, setclickb] = useState(false);
  const [clickc, setclickc] = useState(false);
  const program = () => {

  }
  return (
    <Router>
    <div className="App">
      <ul className="sıfırla">
      <Link onClick={() => {
        setclickb(false);
        setclickc(false)
        setclicka(true);
      }} className={clicka && "active düzen"} to="/program">
          <li className="tab">
          Program
          </li>
          </Link>
          <Link onClick={() => {
        setclickb(true);
        setclickc(false)
        setclicka(false);
      }} className={clickb && "active düzen"} to="/kaynak">
          <li className="tab">
            Kaynak
          </li>
          </Link>
          
        </ul>


        <Switch>
        
          
          <Route exact path="/kaynak" component={Kaynak}/>
            
          

          <Route exact path="/program" component={Program} />
            
          
        </Switch>
    </div>
    </Router>
  );
}



export default App;
