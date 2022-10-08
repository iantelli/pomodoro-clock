import {
    Box,
    Button,
    ChakraProvider,
    Container,
    Grid,
    Skeleton,
    SkeletonText,
    theme,
    VStack,
} from "@chakra-ui/react";
import Axios from "axios";
import * as React from "react";
import { Navbar } from "./components/Navbar";
import { Quote } from "./components/Quote";
import { Timer } from "./components/Timer";

export const App = () => {
    const [currentQuote, setCurrentQuote] = React.useState({ quote: "", author: "" });
    const [isLoading, setIsLoading] = React.useState(true);

    const apiCall = async () => {
        setIsLoading(true);
        const response = await Axios.get("https://api.quotable.io/random");
        setCurrentQuote({ quote: response.data.content, author: response.data.author });
        setIsLoading(false);
    };

    React.useEffect(() => {
        apiCall();
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Navbar />
                <Grid minH="90vh" p={3}>
                    <Container maxW="container.sm" mt="24">
                        <VStack spacing="12" justifyContent="center">
                            <Box px="4" py="2" borderWidth="3px" borderRadius="lg">
                                <Timer size="4xl" />
                            </Box>
                            <Box>
                                <SkeletonText
                                    minW="350px"
                                    noOfLines={4}
                                    spacing="2"
                                    isLoaded={!isLoading}
                                >
                                    <Quote
                                        quote={currentQuote.quote}
                                        author={currentQuote.author}
                                    />
                                </SkeletonText>
                                <Button onClick={apiCall}>New Quote</Button>
                            </Box>
                        </VStack>
                    </Container>
                </Grid>
            </Box>
        </ChakraProvider>
    );
};
