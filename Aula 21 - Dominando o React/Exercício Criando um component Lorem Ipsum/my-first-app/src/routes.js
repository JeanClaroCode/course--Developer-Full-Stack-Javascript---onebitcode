import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanetsScreen from "./screens/planets"; // Corrija o nome 'PLanetsScreen' para 'PlanetsScreen' se for um erro de digitação
import PlanetScreen from "./screens/planet";
import NotFoundScreen from "./screens/notFound";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PlanetsScreen />} />
            <Route path="/planet/:id" element={<PlanetScreen />} />
            <Route path='*'element={<NotFoundScreen/>}/>
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
