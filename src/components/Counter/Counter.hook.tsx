import { useAtom } from "jotai";
import { counterAtom } from "../../store/atoms/counter";

export const useCounterEffect = () => {
    const [count, setCount] = useAtom(counterAtom);
    const decIsDisabled = count === 0;

    const inc = () => setCount(count + 1);
    const dec = () => setCount(count - 1);

    return { count, dec, decIsDisabled, inc };
};
