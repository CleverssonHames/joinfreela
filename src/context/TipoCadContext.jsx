import { createContext, useState } from "react";

export const TipoCadContext = createContext();

export const TipoCadProvider = ({ children }) => {
  const [tipoCadastro, setTipoCadastro] = useState("empresa");

  const alteraTipoCad = (valor) => {
    setTipoCadastro(valor);
  };
  return (
    <TipoCadContext.Provider value={{ tipoCadastro, alteraTipoCad }}>
      {children}
    </TipoCadContext.Provider>
  );
};
