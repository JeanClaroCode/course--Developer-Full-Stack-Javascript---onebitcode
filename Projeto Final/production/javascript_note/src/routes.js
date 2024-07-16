import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/home';
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesScreen from "./screens/notes/index";
import UsersEditScreen from "./screens/users/editAccount";
import PrivateRouter from "./components/auth/private_router";
import UsersDeleteScreen from "./screens/users/deleteaccount";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/notes' element={<PrivateRouter element={NotesScreen} />} />
            <Route path='/users/edit' element={<PrivateRouter element={UsersEditScreen} />} />
            <Route path='/users/delete' element={<PrivateRouter element={UsersDeleteScreen} />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
