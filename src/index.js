import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Importing individual components
import 'bootstrap/dist/css/bootstrap.css';
import FirstComponent from './componenets/FirstComponent';
import FirstComponentWithProps from './componenets/FirstComponentWithProps';
import FirstComponentWithPropsUsingDistructering from './componenets/FirstComponentWithPropsUsingDistructering';
import FirtsComponentWithPropsUsignClass from './componenets/FirtsComponentWithPropsUsignClass';
import FirstComponentWithChildrean from './componenets/FirstComponentWithChildrean';
import FirstComponentWithChildreanUsingClass from './componenets/FirstComponentWithChildreanUsingClass';
import Fruits from './jsx/fruits';
import FirstComponentUsingState from './state/FirstComponentUsingState';
import Event from './Events/Event';
import ComponentForUseState from './Hooks/ComponentForUseState';
import LifeCycleComponent from './LifeCyclesComponenet/LifeCycleComponent';
import ComponetForUseEffect from './Hooks/ComponetForUseEffect';
import ComponentForUseRef from './Hooks/ComponentForUseRef';
import Page from './langugeSwitcher/page';
import Form from './Forms/Form';
import AppOfRouter from './Router/AppOfRouter';
import CompnenetUseContext from './Hooks/ComponentUseContext';
import ComponentForUseReducer from './Hooks/ComponentForUseReducer';
import ComponentUseCallBack from './Hooks/ComponentUseCallBack';
const root = ReactDOM.createRoot(document.getElementById('root'));
const fruits = [
    'orange',
    'banana',
    'tofa7a',
    'kiwiwi'
]
root.render(<App/>);
