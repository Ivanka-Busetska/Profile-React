import { useEffect, useState } from "react";

import {
    Box,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Typography,
} from "@mui/material";

import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { fetchOpenWeather } from "../lib/open-weather";

const MyCityPage = () => {
    const [weather, setWeather] = useState(null);

    const getWeather = async () => {
        const data = await fetchOpenWeather(
            50.414050,
            25.756858
        );

        setWeather(data);
    };

    useEffect(() => {
        getWeather();
    }, []);

    if (!weather) {
        return (
            <Box className="flex justify-center items-center h-screen">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box className="min-h-screen bg-gradient-to-br from-sky-400 to-blue-700 py-12">
            <Container maxWidth="md">
                <Card className="!rounded-3xl !bg-white/20 backdrop-blur-lg !text-white !shadow-2xl">
                    <CardContent className="!p-10 text-center">

                        <WbSunnyIcon sx={{ fontSize: 90 }} />

                        <Typography
                            variant="h2"
                            className="!font-black !mt-4"
                        >
                            {weather?.name}
                        </Typography>

                        <Typography
                            variant="h5"
                            className="!text-gray-200"
                        >
                            {weather?.sys?.country}
                        </Typography>

                        <Typography
                            variant="h1"
                            className="!font-black !mt-6"
                        >
                            {Math.round(weather?.main?.temp)}°C
                        </Typography>

                        <Typography
                            variant="h5"
                            className="!capitalize !mt-2"
                        >
                            {weather?.weather?.[0]?.description}
                        </Typography>

                    </CardContent>
                </Card>

                <Box className="grid md:grid-cols-2 gap-6 mt-8">
                    <Card className="!rounded-3xl !shadow-xl">
                        <CardContent className="!p-8">

                            <Box className="flex items-center gap-3 mb-4">
                                <LocationOnIcon fontSize="large" />
                                <Typography variant="h5" className="!font-bold">
                                    Координати
                                </Typography>
                            </Box>

                            <Typography variant="h6">
                                Широта: {weather?.coord?.lat}
                            </Typography>

                            <Typography variant="h6">
                                Довгота: {weather?.coord?.lon}
                            </Typography>

                        </CardContent>
                    </Card>

                    <Card className="!rounded-3xl !shadow-xl">
                        <CardContent className="!p-8">

                            <Box className="flex items-center gap-3 mb-4">
                                <AirIcon fontSize="large" />
                                <Typography variant="h5" className="!font-bold">
                                    Вітер
                                </Typography>
                            </Box>

                            <Typography variant="h6">
                                Швидкість: {weather?.wind?.speed} м/с
                            </Typography>

                            <Typography variant="h6">
                                Напрямок: {weather?.wind?.deg}°
                            </Typography>

                        </CardContent>
                    </Card>

                    <Card className="!rounded-3xl !shadow-xl">
                        <CardContent className="!p-8">

                            <Box className="flex items-center gap-3 mb-4">
                                <ThermostatIcon fontSize="large" />
                                <Typography variant="h5" className="!font-bold">
                                    Температура
                                </Typography>
                            </Box>

                            <Typography variant="h6">
                                Відчувається як:
                                {" "}
                                {Math.round(weather?.main?.feels_like)}°C
                            </Typography>

                            <Typography variant="h6">
                                Вологість:
                                {" "}
                                {weather?.main?.humidity}%
                            </Typography>

                        </CardContent>
                    </Card>

                    <Card className="!rounded-3xl !shadow-xl">
                        <CardContent className="!p-8">

                            <Box className="flex items-center gap-3 mb-4">
                                <PublicIcon fontSize="large" />
                                <Typography variant="h5" className="!font-bold">
                                    Локація
                                </Typography>
                            </Box>

                            <Typography variant="h6">
                                Місто: {weather?.name}
                            </Typography>

                            <Typography variant="h6">
                                Країна: {weather?.sys?.country}
                            </Typography>

                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
};

export default MyCityPage;