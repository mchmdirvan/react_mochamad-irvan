/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";

export function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    return () => {
      document.title = prevTitle;
    };
  });
}

export function useFetchGet(url) {
  const [data, SetData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => SetData(result));
  }, [url]);
  return [data];
}
