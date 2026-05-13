import {
    Container,
    Typography,
    Paper,
    Box,
} from "@mui/material";

import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from "@mui/lab";

import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const MyFuturePage = () => {
    return (
        <Box className="bg-gray-50 min-h-screen py-14">
            <Container maxWidth="lg">

                {/* Header */}
                <Box className="text-center mb-16">
                    <Typography
                        variant="h2"
                        className="!font-black !text-gray-900"
                    >
                        Моє майбутнє
                    </Typography>

                    <Typography
                        variant="h6"
                        className="!text-gray-600 !mt-4"
                    >
                        Цілі, мотивація та професійний розвиток
                    </Typography>
                </Box>

                {/* Timeline */}
                <Paper
                    elevation={0}
                    className="!rounded-3xl !p-10 !bg-white"
                >
                    <Timeline position="alternate">

                        {/* Step 1 */}
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="!bg-black">
                                    <CodeIcon />
                                </TimelineDot>

                                <TimelineConnector />
                            </TimelineSeparator>

                            <TimelineContent>
                                <Paper className="!p-6 !rounded-2xl">
                                    <Typography
                                        variant="h5"
                                        className="!font-bold !mb-3"
                                    >
                                        Поглибити технічні навички
                                    </Typography>

                                    <Typography className="!text-gray-600 !leading-8">
                                        Хочу впевнено володіти сучасними
                                        технологіями: React, .NET,
                                        базами даних та алгоритмами.
                                        Планую розвиватися через
                                        практику, власні проєкти
                                        та командну роботу.
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>

                        {/* Step 2 */}
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="!bg-black">
                                    <SchoolIcon />
                                </TimelineDot>

                                <TimelineConnector />
                            </TimelineSeparator>

                            <TimelineContent>
                                <Paper className="!p-6 !rounded-2xl">
                                    <Typography
                                        variant="h5"
                                        className="!font-bold !mb-3"
                                    >
                                        Стати Software Engineer
                                    </Typography>

                                    <Typography className="!text-gray-600 !leading-8">
                                        Бачу себе у сфері розробки
                                        програмного забезпечення.
                                        Для цього потрібно вміти
                                        працювати з frontend та backend,
                                        створювати архітектуру застосунків
                                        і швидко навчатися новому.
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>

                        {/* Step 3 */}
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="!bg-black">
                                    <RocketLaunchIcon />
                                </TimelineDot>
                            </TimelineSeparator>

                            <TimelineContent>
                                <Paper className="!p-6 !rounded-2xl">
                                    <Typography
                                        variant="h5"
                                        className="!font-bold !mb-3"
                                    >
                                        Розвиток і самореалізація
                                    </Typography>

                                    <Typography className="!text-gray-600 !leading-8">
                                        Прагну працювати над реальними
                                        IT-проєктами, брати участь
                                        у створенні сучасних цифрових
                                        продуктів та постійно
                                        вдосконалювати свої навички.
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>

                    </Timeline>
                </Paper>

                {/* Quote */}
                <Paper
                    elevation={0}
                    className="
            !bg-black
            !text-white
            !rounded-3xl
            !p-10
            !mt-12
            text-center
          "
                >
                    <Typography
                        variant="h4"
                        className="!font-bold !mb-6"
                    >
                        Мотиваційна фраза
                    </Typography>

                    <Typography
                        variant="h5"
                        className="!italic !text-gray-300 !leading-10"
                    >
                        “Успіх — це не випадковість.
                        Це щоденна праця, дисципліна
                        і віра у власні можливості.”
                    </Typography>
                </Paper>

                {/* Dream Job */}
                <Paper
                    elevation={0}
                    className="
            !rounded-3xl
            !p-10
            !mt-12
            !bg-white
          "
                >
                    <Typography
                        variant="h3"
                        className="!font-black !mb-6"
                    >
                        Робота мрії
                    </Typography>

                    <Typography
                        className="
              !text-gray-700
              !text-lg
              !leading-9
            "
                    >
                        Моя робота мрії — бути розробницею
                        сучасних цифрових продуктів у сфері IT.
                        Я хочу працювати в команді, де можна
                        поєднувати творчість, логіку та технології,
                        створюючи корисні застосунки для людей.

                        Для мене важливо постійно розвиватися,
                        навчатися новому та брати участь
                        у цікавих інноваційних проєктах.
                    </Typography>
                </Paper>

            </Container>
        </Box>
    );
};

export default MyFuturePage;