import React from 'react';
import App from "../components/App";
import MainContainer from "../components/MainContainer";
import {axiosInstance} from "./index";
import FavoritesContainer from "../components/FavoritesContainer";

const Favorites = () => {
    return (
        <App axiosInstance={axiosInstance}>
            <FavoritesContainer />
        </App>
    )
}

export default Favorites;