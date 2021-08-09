import React from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route path='/' exact>
          <Header/>
          <Main/>
          <Footer/>
        </Route>
        <Route path='/movies' exact>

        </Route>
      </Switch>
    </div>
  );
}

export default App;
