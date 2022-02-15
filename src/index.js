import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Data from "./components/pages/Data";
import Cool from "./components/pages/Cool";
import User from "./components/User";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import Object from "./components/Object";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"Box1"} element={<Box1/>}/>
                    <Route path={"Box2"} element={<Box2/>}/>
                    <Route path={"Box3"} element={<Box3/>}/>
                    <Route path={"data"} element={<Data/>}>
                        <Route index element={<Object/>}/>
                        <Route path={"/data/:id"} element={<User/>}/>
                    </Route>
                    <Route path={"cool"} element={<Cool/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
