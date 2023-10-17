/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState } from "react";

const TokenContext = createContext("");

function TokenProvider({ Children }) {
  const [token, setToken] = useState("");

  const tokenContextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  return (
    <TokenContext.Provider value={tokenContextValue}>
      {Children}
    </TokenContext.Provider>
  );
}

function useToken() {
  const tokenContext = useContext(TokenContext);

  if (tokenContext === undefined) {
    console.log("ERROR, useToken must be used within TokenContext");
  }

  return tokenContext;
}

export { TokenProvider, useToken };
