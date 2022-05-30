import React from 'react';


import * as ReactDOM from 'react-dom/client';
import Header from './header';
import Karuzela from "./slider";
function App () {
    return (
    <>
        <Header/>
    <Karuzela/>
    </>
    )
}


const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<App/>);