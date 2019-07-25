import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
////Imported BrowserRouter as router also wrapped `App component that I am passing through ReactDom.Render with new router component
ReactDOM.render(
<Router>
<App />
</Router>, 
document.getElementById('root')
);
