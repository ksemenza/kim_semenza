import React from 'react';
import HomePage from './components/HomePage'

import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import {Route, Switch} from "react-router-dom";
import './App.css';
import Projects from './components/Projects';
import Artifacts from './components/Artifacts';

function App() {

  return (
        <div className='app-page-ctr'>
        <Switch>   
            <Route path exact='/' component={HomePage}/>
            <Route path='/about' component={About}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/resume' component={Resume}/>
            <Route path='/contact' component={Contact}/>
            <Route path exact ='/artifacts' component={Artifacts}/>
        </Switch>
        </div>
    

  );
}

export default App;
