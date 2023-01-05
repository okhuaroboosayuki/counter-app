import { useRef } from "react";
import useCounterReducer from "./reducer";

const useCounter = (initialState) => {
    const [state, dispatch] = useCounterReducer(initialState || { count: 0 });

    const inputRef = useRef(null);

    const increment = () => {
        dispatch({ type: "increment" });
    };

    const decrement = () => {
        if (state.count > 0) {
            dispatch({ type: "decrement" });
        } else {
            return state.count;
        }
    };

    const reset = () => {
        dispatch({ type: "reset" });
    };

    const setValue = () => {
        if (inputRef.current.value === "") {
            return state.count;
        } else {
            dispatch({ type: "setValue", payload: Number(inputRef.current.value) });
            inputRef.current.value = "";
        }
    };

    return [state, increment, decrement, reset, setValue, inputRef];
}

export default useCounter;