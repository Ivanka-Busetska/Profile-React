import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Typography,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";

const AboutPage = () => {
    return (
        <Box className="bg-gray-50 min-h-screen py-14">
            <Container maxWidth="lg">
                <Box className="text-center mb-16">
                    <Typography
                        variant="h2"
                        className="!font-black !text-gray-900"
                    >
                        Про мене
                    </Typography>

                    <Typography
                        variant="h6"
                        className="!text-gray-600 !mt-4"
                    >
                        Студентка, майбутня розробниця та людина,
                        яка постійно прагне розвитку
                    </Typography>
                </Box>
                <Card
                    elevation={0}
                    className="!rounded-3xl !shadow-xl !mb-10"
                >
                    <CardContent className="!p-10">

                        <Box className="flex items-center gap-3 mb-6">
                            <SchoolIcon fontSize="large" />

                            <Typography
                                variant="h4"
                                className="!font-bold"
                            >
                                Коротко про себе
                            </Typography>
                        </Box>

                        <Typography
                            className="
                            !text-gray-700
                            !text-lg
                            !leading-9
                          "
                        >
                            Я — студентка другого курсу НУБіП України.
                            Цікавлюся програмуванням, математикою
                            та цифровими технологіями.

                            Поєдную навчання з активним життям
                            і творчістю, люблю рух, розвиток
                            та нові виклики.
                        </Typography>
                    </CardContent>
                </Card>

                <Card
                    elevation={0}
                    className="!rounded-3xl !shadow-xl !mb-14"
                >
                    <CardContent className="!p-10">

                        <Box className="flex items-center gap-3 mb-6">
                            <FavoriteIcon fontSize="large" />

                            <Typography
                                variant="h4"
                                className="!font-bold"
                            >
                                Цінності та захоплення
                            </Typography>
                        </Box>

                        <Typography
                            className="
                            !text-gray-700
                            !text-lg
                            !leading-9
                          "
                        >
                            Для мене важливі розвиток, дисципліна
                            та самостійність.

                            Захоплююсь танцями
                            (черлідинг і народні танці),
                            люблю активний спосіб життя
                            та нові виклики.

                            У навчанні цікавлюсь схемотехнікою,
                            програмуванням (C, .NET, React),
                            базами даних і математикою.

                            Постійно намагаюсь поєднувати
                            теорію з практикою через лабораторні
                            та власні проєкти.
                        </Typography>

                        <Box className="flex flex-wrap gap-3 mt-8">
                            <Chip label="React" />
                            <Chip label=".NET" />
                            <Chip label="C" />
                            <Chip label="JavaScript" />
                            <Chip label="Бази даних" />
                            <Chip label="Математика" />
                            <Chip label="Танці" />
                        </Box>

                    </CardContent>
                </Card>

                <Box className="mb-10">
                    <Typography
                        variant="h3"
                        className="
                          !font-black
                          !text-center
                          !mb-12
                        "
                    >
                        Мої проєкти
                    </Typography>

                    <Box className="grid md:grid-cols-3 gap-8">

                        <Card
                            elevation={0}
                            className="!rounded-3xl !shadow-xl"
                        >
                            <CardContent className="!p-8">

                                <Box className="flex items-center gap-3 mb-6">
                                    <CodeIcon />

                                    <Typography
                                        variant="h5"
                                        className="!font-bold"
                                    >
                                        HTML + CSS
                                    </Typography>
                                </Box>

                                <Box className="space-y-4">

                                    <Button
                                        variant="contained"
                                        startIcon={<GitHubIcon />}
                                        fullWidth
                                        href="https://github.com/Ivanka-Busetska/html-basic"
                                        target="_blank"
                                    >
                                        HTML Basic
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        startIcon={<GitHubIcon />}
                                        fullWidth
                                        href="https://github.com/Ivanka-Busetska/lab3"
                                        target="_blank"
                                    >
                                        Minimal Page
                                    </Button>

                                </Box>

                            </CardContent>
                        </Card>

                        <Card
                            elevation={0}
                            className="!rounded-3xl !shadow-xl"
                        >
                            <CardContent className="!p-8">

                                <Box className="flex items-center gap-3 mb-6">
                                    <CodeIcon />

                                    <Typography
                                        variant="h5"
                                        className="!font-bold"
                                    >
                                        JavaScript
                                    </Typography>
                                </Box>

                                <Box className="space-y-4">

                                    <Button
                                        variant="contained"
                                        startIcon={<GitHubIcon />}
                                        fullWidth
                                        href="https://github.com/Ivanka-Busetska/js-fetchFirstLab"
                                        target="_blank"
                                    >
                                        JS Fetch
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        startIcon={<GitHubIcon />}
                                        fullWidth
                                        href="https://github.com/Ivanka-Busetska/js-array"
                                        target="_blank"
                                    >
                                        JS Array
                                    </Button>

                                </Box>

                            </CardContent>
                        </Card>

                        <Card
                            elevation={0}
                            className="!rounded-3xl !shadow-xl"
                        >
                            <CardContent className="!p-8">

                                <Box className="flex items-center gap-3 mb-6">
                                    <CodeIcon />

                                    <Typography
                                        variant="h5"
                                        className="!font-bold"
                                    >
                                        React
                                    </Typography>
                                </Box>

                                <Box className="space-y-4">

                                    <Button
                                        variant="contained"
                                        startIcon={<GitHubIcon />}
                                        fullWidth
                                        href="https://github.com/Ivanka-Busetska/react-gallery"
                                        target="_blank"
                                    >
                                        React Gallery
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        startIcon={<GitHubIcon />}
                                        fullWidth
                                        href="https://github.com/Ivanka-Busetska/react-router"
                                        target="_blank"
                                    >
                                        React Router
                                    </Button>

                                </Box>

                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default AboutPage;