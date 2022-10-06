import * as React from "react";
import { ChakraProvider, Box, Grid, theme, Button, VStack } from "@chakra-ui/react";
import { Timer } from "./components/Timer";
import { Quote } from "./components/Quote";
import { Navbar } from "./components/Navbar";
import Axios from "axios";

export const App = () => {
    const [currentQuote, setCurrentQuote] = React.useState({ quote: "", author: "" });

    const apiCall = async () => {
        const response = await Axios.get("https://api.quotable.io/random");
        setCurrentQuote({ quote: response.data.content, author: response.data.author });
    };

    React.useEffect(() => {
        apiCall();
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Navbar />
                <Grid minH="90vh" p={3}>
                    <VStack spacing="24" justifyContent="center">
                        <Box px="16" py="8" borderWidth="3px" borderRadius="lg">
                            <Timer size="4xl" />
                        </Box>
                        <Box>
                            <Quote quote={currentQuote.quote} author={currentQuote.author} />
                            <Button onClick={apiCall}>New Quote</Button>
                        </Box>
                    </VStack>
                </Grid>
            </Box>
        </ChakraProvider>
    );
};
