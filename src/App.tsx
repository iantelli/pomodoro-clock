import * as React from "react";
import { ChakraProvider, Box, Grid, theme, Heading, Flex, Spacer, VStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { Timer } from "./components/Timer";
import { Quote } from "./components/Quote";
import Axios from "axios";

export const App = () => {
    const [currentQuote, setCurrentQuote] = React.useState({
        quote: "Inspirational quotes will appear here as you work",
        person: "",
    });

    React.useEffect(() => {
        const int = setInterval(() => {
            Axios.get("https://motivational-quote-api.herokuapp.com/quotes/random")
                .then(res => {
                    setCurrentQuote(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }, 200000);
        return () => {
            clearInterval(int);
        };
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Flex minWidth="max-content" alignItems="center">
                    <Box p="2">
                        <Heading size="lg">Pomodoro Clock</Heading>
                    </Box>
                    <Spacer />
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Flex>
                <Grid minH="90vh" p={3}>
                    <VStack spacing="24" justifyContent="center">
                        <Quote quote={currentQuote.quote} person={currentQuote.person} />
                        <Timer size="4xl" />
                    </VStack>
                </Grid>
            </Box>
        </ChakraProvider>
    );
};
