import { useEffect, useRef } from "react";

/**
 * 마운트 전에 true
 * 마운트 후에 false 리턴
 * @returns {boolean}
 */
function useMount() {
  const ref = useRef(true);

  useEffect(() => {
    ref.current = false;
    return () => {
      ref.current = true;
    };
  }, []);

  return ref.current;
}

export default useMount;
