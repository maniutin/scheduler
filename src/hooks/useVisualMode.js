import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    if (replace) {
      const historyArr = [...history.slice(0, -1), mode];
      setHistory(historyArr);
    } else {
      const historyArr = [...history];
      historyArr.push(mode);
      setHistory(historyArr);
    }
  }

  function back() {
    if (history.length < 2) {
      return;
    }

    setHistory((prev) => {
      const historyArr = [...prev];
      historyArr.pop();
      return historyArr;
    });
  }

  const mode = history[history.length - 1];
  return { mode, transition, back };
}
