import { useEffect, useReducer } from "react";

export const usePhase = (phase, path) => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    const listener = () => forceUpdate(); // TODO: Only update if the watched path changed
    phase.on(path || "*", listener);
    return () => {
      phase.off(listener);
    };
  }, [phase, path]);
  return phase;
};
