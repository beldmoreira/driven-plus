import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Login from './components/Login';
import Register from './components/Register';
import Subscriptions from './components/Subscriptions/';


export default function App() {
    const [token, setToken] = useState('');
    const [user, setUser] = useState(null);
      return (
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login setToken={setToken} setUser={setUser}/>} />
             <Route path="/sign-up" element={<Register/>} />
             <Route path="/subscriptions" element={<Subscriptions/>}/>
             <Route path="/home" element={<Home token={token} user={user}/>} />
          </Routes>
        </BrowserRouter>
      );
    }
    