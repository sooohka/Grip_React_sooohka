import { useEffect } from "react";

function useDebounce(callback: Function, deps: any[], time = 200) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      callback();
    }, time);

    return () => {
      clearTimeout(timeoutId);
    };
  }, deps);
}

export default useDebounce;
