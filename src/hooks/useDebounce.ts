import { useEffect } from "react";

/**
 * callback 바뀔떄마다 fire!
 */
function useDebounce(callback: Function, time = 400) {
  useEffect(() => {
    const timeoutId = setTimeout(callback, time);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [callback, time]);
}

export default useDebounce;
