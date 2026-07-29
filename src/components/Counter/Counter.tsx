import useCounterEffect from "./Counter.hook";
import "./Counter.style.css";
import CounterView from "./Counter.view";

const Counter = () => {
    const { count, dec, decIsDisabled, inc } = useCounterEffect();

    return (
        <CounterView
            count={count}
            dec={dec}
            decIsDisabled={decIsDisabled}
            inc={inc}
        />
    );
};

export default Counter;
