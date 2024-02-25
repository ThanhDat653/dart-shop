import { useRef } from "react";

export default function useDebounce(func, delay) {
    let timeout = useRef();

    return function executedFunction(...arg) {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }

        timeout.current = setTimeout(() => {
            console.log("executed function");
            func(...arg)
            timeout.current = null
        }, delay)
    }
}