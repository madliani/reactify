import { Button, ButtonGroup, Typography } from "@heroui/react";
import { useAtom } from "jotai";
import { countAtom } from "../jotai/atoms/count";

export const Clicker = () => {
    const [count, setCount] = useAtom(countAtom);
    const decIsDisabled = count === 0;

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="clicker">
            <Typography.Heading level={1} data-testid="clicker__heading">
                {count}
            </Typography.Heading>
            <ButtonGroup className="clicker__btn-group">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement} isDisabled={decIsDisabled}>
                    Decrement
                </Button>
            </ButtonGroup>
        </div>
    );
};
