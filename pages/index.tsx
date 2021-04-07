import React from 'react';
import App from "../components/App";
import MainContainer from "../components/MainContainer";
import axios from "axios";

export const axiosInstance = axios.create();

const Index = () => {
    return (
        <App axiosInstance={axiosInstance}>
           <MainContainer axiosInstance={axiosInstance} />
        </App>
    )
}

export default Index;

/*
export const getStaticProps: GetStaticProps = async (context) => {
    axiosInstance.defaults.headers['Client-ID'] = 'ku0q19f8kefr5zpabtw076oyx4kyb6';
    axiosInstance.defaults.headers['Accept'] = 'application/vnd.twitchtv.v5+json';
    return {
        props: {axiosInstance}
    }
}*/
