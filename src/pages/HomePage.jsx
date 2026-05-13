import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <Box className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen text-white">
            <Container maxWidth="lg">
                <Box className="min-h-screen flex flex-col justify-center">
                    <Typography
                        variant="h1"
                        className="
                          !font-black
                          !leading-tight
                          !mb-6
                        "
                    >
                        Привіт 👋
                        <br />

                        Я —
                        {" "}
                        <span className="text-blue-400">
                          Іванка Бусецька
                        </span>
                    </Typography>

                    <Typography
                        variant="h5"
                        className="
                          !text-gray-300
                          !max-w-3xl
                          !leading-10
                          !mb-10
                        "
                    >
                        Студентка НУБіП України та майбутня
                        Software Engineer.

                        Цікавлюсь React, .NET,
                        алгоритмами та сучасною веброзробкою.
                        Люблю створювати красиві
                        та функціональні інтерфейси.
                    </Typography>

                    <Box className="flex gap-5 flex-wrap">
                        <Button
                            component={Link}
                            to="/about"
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            className="
                            !bg-blue-500
                            hover:!bg-blue-600
                            !rounded-2xl
                            !px-8
                            !py-3
                          "
                        >
                            Про мене
                        </Button>

                        <Button
                            component={Link}
                            to="/my-city"
                            variant="outlined"
                            size="large"
                            className="
                            !border-white
                            !text-white
                            hover:!border-blue-400
                            hover:!text-blue-400
                            !rounded-2xl
                            !px-8
                            !py-3
                          "
                        >
                            Моє місто
                        </Button>
                    </Box>
                </Box>
            </Container>

            <Box className="pb-24">
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        className="
                          !font-black
                          !text-center
                          !mb-14
                        "
                    >
                        Що є на сайті
                    </Typography>

                    <Box className="grid md:grid-cols-3 gap-8">
                        <Card className="!rounded-3xl !bg-white/10 backdrop-blur-lg !text-white">
                            <CardContent className="!p-10">
                                <SchoolIcon sx={{ fontSize: 60 }} />
                                <Typography
                                    variant="h4"
                                    className="!font-bold !mt-5 !mb-4"
                                >
                                    <Link to={'/about'}>Про мене</Link>
                                </Typography>

                                <Typography className="!text-gray-300 !leading-8">
                                    Інформація про мене,
                                    мої захоплення,
                                    навички та навчання.
                                </Typography>

                            </CardContent>
                        </Card>

                        <Card className="!rounded-3xl !bg-white/10 backdrop-blur-lg !text-white">
                            <CardContent className="!p-10">

                                <CodeIcon sx={{ fontSize: 60 }} />

                                <Typography
                                    variant="h4"
                                    className="!font-bold !mt-5 !mb-4"
                                >
                                    <Link to={'/my-city'}>
                                        Моє місто
                                    </Link>
                                </Typography>

                                <Typography className="!text-gray-300 !leading-8">
                                    Сторінка мого міста
                                    та
                                    візуалізація погоди.
                                </Typography>

                            </CardContent>
                        </Card>

                        <Card className="!rounded-3xl !bg-white/10 backdrop-blur-lg !text-white">
                            <CardContent className="!p-10">

                                <RocketLaunchIcon sx={{ fontSize: 60 }} />

                                <Typography
                                    variant="h4"
                                    className="!font-bold !mt-5 !mb-4"
                                >
                                    <Link to={'/my-future'}>
                                        Мій розвиток
                                    </Link>
                                </Typography>

                                <Typography className="!text-gray-300 !leading-8">
                                    Професійні цілі,
                                    мотивація та бачення
                                    майбутньої карʼєри в IT.
                                </Typography>

                            </CardContent>
                        </Card>

                    </Box>

                </Container>
            </Box>

        </Box>
    );
};

export default HomePage;