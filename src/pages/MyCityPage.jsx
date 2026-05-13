import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {fetchOpenWeather} from "../lib/open-weather";

const MyCityPage = () => {
    const [weather, setWeather] = useState(null);

    const getWeather = async () => {
        const weather = await fetchOpenWeather(50.414050, 25.756858)
        setWeather(weather);
    }

    useEffect(() => {
        getWeather()
    }, []);

    return (
        <div>
            <h1>Моє місто: {weather?.name}</h1>
            <p>Країна: {weather?.sys?.country}</p>
            <p>Координати: {weather?.coord?.lat}, {weather?.coord?.lon}</p>
            <div>
                <h3>Вітер:</h3>
                <p>Швидкість: {weather?.wind?.speed}</p>
                <p>Напрямок: {weather?.wind?.deg}</p>
            </div>
            <div>
                <h3>Погода:</h3>
                <p>Температура: {weather?.main?.temp}</p>
                <p>Погода: {weather?.weather?.[0]?.description}</p>
            </div>
        </div>
    )
}

export default MyCityPage;