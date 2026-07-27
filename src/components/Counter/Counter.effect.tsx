import { useAtom } from "jotai";
import { countAtom } from "../../store/atoms/count";

const useCounterEffect = () => {
    const [count, setCount] = useAtom(countAtom);
    const decIsDisabled = count === 0;

    const inc = () => setCount(count + 1);
    const dec = () => setCount(count - 1);

    return { count, dec, decIsDisabled, inc };
};

export default useCounterEffect;
