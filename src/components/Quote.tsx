import { Box, Heading, Text } from "@chakra-ui/react";

export const Quote = (props: { quote: string; person: string }) => {
    return (
        <Box>
            <Heading>"{props.quote}"</Heading>
            <Text>{props.person}</Text>
        </Box>
    );
};
