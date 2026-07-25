import { Button, ButtonGroup, Typography } from "@heroui/react";
import { useAtom } from "jotai";
import { countAtom } from "../store/atoms/count";

export const Counter = () => {
    const [count, setCount] = useAtom(countAtom);
    const decIsDisabled = count === 0;

    const inc = () => setCount(count + 1);
    const dec = () => setCount(count - 1);

    return (
        <div className="counter">
            <Typography.Heading data-testid="counter__heading" level={1}>
                {count}
            </Typography.Heading>
            <ButtonGroup className="counter__btn-group">
                <Button onClick={inc}>Increment</Button>
                <Button isDisabled={decIsDisabled} onClick={dec}>
                    Decrement
                </Button>
            </ButtonGroup>
        </div>
    );
};
