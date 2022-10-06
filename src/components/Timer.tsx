import * as React from "react";
import { Heading, HeadingProps, Button, Flex, Text } from "@chakra-ui/react";

export const Timer: React.FC<HeadingProps> = props => {
    const [seconds, setSeconds] = React.useState(25 * 60);
    const [paused, setPaused] = React.useState(true);
    const [isBreak, setIsBreak] = React.useState(false);

    React.useEffect(() => {
        const int = setInterval(() => {
            if (!paused) {
                setSeconds(s => s - 1);
            }
        }, 1000);
        if (seconds === 0 && !isBreak) {
            clearInterval(int);
            startRelaxTimer();
            setIsBreak(!isBreak);
        }
        return () => {
            clearInterval(int);
        };
    }, [paused, seconds, isBreak]);

    function startTimer() {
        setPaused(false);
    }
    function pauseTimer() {
        setPaused(true);
    }
    function resetTimer() {
        setPaused(true);
        isBreak ? startRelaxTimer() : setSeconds(25 * 60);
    }
    function startRelaxTimer() {
        setSeconds(5 * 60);
    }

    return (
        <>
            <Heading {...props}>
                {`${Math.floor(seconds / 60)} : ${("00" + (seconds % 60)).slice(-2)}`}
            </Heading>
            <Text>{isBreak ? "Break Time 🥳" : "Focus ✍️"}</Text>

            <Flex justifyContent="center" gap="6">
                <Button size="lg" onClick={startTimer}>
                    ▶️
                </Button>
                <Button size="lg" onClick={pauseTimer}>
                    ⏸
                </Button>
                <Button size="lg" onClick={resetTimer}>
                    ⏪
                </Button>
            </Flex>
        </>
    );
};
