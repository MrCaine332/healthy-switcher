import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom"
import {Home} from "@pages/home";
import {Menu} from "@pages/menu";
import {Recipes} from "@pages/recipes";
import {Recipe} from "@pages/recipe";

const Router = () => {
	return (
		<>
            <Routes>
                <Route path={"/home"} element={<Home />} />
                <Route path={"/menu"} element={<Menu />} />
                <Route path={"/recipes"} element={<Recipes />} />
                <Route path={"/recipes/:id"} element={<Recipe />} />
                <Route path={'*'} element={<Navigate to={'/home'} replace />} />
            </Routes>
		</>
	);
};

export default Router;