import { Button, ButtonGroup, Typography } from "@heroui/react";
import { useAtom } from "jotai";
import { countAtom } from "../store/atoms/count";

export const Clicker = () => {
    const [count, setCount] = useAtom(countAtom);
    const decIsDisabled = count === 0;

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="clicker">
            <Typography.Heading data-testid="clicker__heading" level={1}>
                {count}
            </Typography.Heading>
            <ButtonGroup className="clicker__btn-group">
                <Button onClick={increment}>Increment</Button>
                <Button isDisabled={decIsDisabled} onClick={decrement}>
                    Decrement
                </Button>
            </ButtonGroup>
        </div>
    );
};
