import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGJjMDUyZDZjMTE1ZDBhNzU1NzNlOTg1ZTIxOGJjMSIsInN1YiI6IjY2MDJiOTdhMzUyMGU4MDE3ZWRhYjY2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m2IooqnsoUpyxqVfvi66NUIezxi-_5lwkPJ7eCXdsfs;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
