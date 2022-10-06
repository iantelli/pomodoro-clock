import { Heading, Flex, Spacer, Box, Icon, Link } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
    return (
        <Flex minWidth="max-content" alignItems="center">
            <Box p="2">
                <Heading size="lg">Pomodoro Clock</Heading>
            </Box>
            <Spacer />
            <Link href="https://github.com/iantelli" isExternal>
                <Icon mt="2" as={FaGithub} />
            </Link>
            <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
    );
};
