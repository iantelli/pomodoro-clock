import { Box, Heading, Text } from "@chakra-ui/react";

export const Quote = (props: { quote: string; author: string }) => {
    return (
        <Box my="4">
            <Heading size="lg">"{props.quote}"</Heading>
            <Text fontStyle="italic">-{props.author}</Text>
        </Box>
    );
};
