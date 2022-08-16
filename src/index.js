import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter} from 'react-router-dom'
import Demo from './pages/Demo'



// 新版本
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <BrowserRouter>
        <Demo />
        <App />
    </BrowserRouter>,
)
