import { useEffect, useState } from "react";

function useMount() {
  const [isMount, setIsMount] = useState(true);

  useEffect(() => {
    setIsMount(false);
  }, []);

  return { isMount };
}

export default useMount;
