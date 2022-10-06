import * as React from "react";
import { ChakraProvider, Box, VStack, Grid, theme, Heading, Flex, Spacer } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { Logo } from "./components/Logo";
import { Timer } from "./components/Timer";

export const App = () => (
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
                <VStack spacing={8}>
                    <Logo h="40vmin" pointerEvents="none" />
                </VStack>
                <Timer size="4xl" />
            </Grid>
        </Box>
    </ChakraProvider>
);
