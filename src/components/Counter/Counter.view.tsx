import { Button, ButtonGroup, Typography } from "@heroui/react";
import { CounterViewProps } from "./Counter.type";

export const CounterView = ({
    count,
    dec,
    decIsDisabled,
    inc
}: CounterViewProps) => {
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
