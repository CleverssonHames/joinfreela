import { useContext } from "react";
import { TipoCadContext } from "../context/tipoCadContext";

const Steppers = () => {
  const { tipoCadastro } = useContext(TipoCadContext);

  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-red-600 dark:text-red-600 sm:text-base transition-all duration-100">
      <li className="flex md:w-full items-center text-red-500 dark:text-red-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-red-500 after:border-1 after:hidden sm:after:inline-block dark:after:border-gray-700">
        <span className="flex relative items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-red-600 dark:after:text-gray-500">
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <label className="absolute -top-9 -left-6 w-full text-center text-nowrap">
            Tipo cadastro {tipoCadastro}
          </label>
        </span>
      </li>
      <li className="flex md:w-full items-center text-red-500 dark:text-red-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-red-500 after:border-1 after:hidden sm:after:inline-block dark:after:border-gray-700">
        <span className="flex relative items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-red-600 dark:after:text-gray-500">
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <label className="absolute -top-9 -left-6 w-full text-center text-nowrap">
            Dados
          </label>
        </span>
      </li>
      {tipoCadastro === "empresa" ? (
        <li className="flex md:w-full items-center text-red-500 dark:text-red-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-red-500 after:border-1 after:hidden sm:after:inline-block dark:after:border-gray-700">
          <span className="flex relative items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-red-600 dark:after:text-gray-500">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <label className="absolute -top-9 -left-6 w-full text-center text-nowrap">
              Pagamento
            </label>
          </span>
        </li>
      ) : (
        ""
      )}

      <li className="flex items-cente">
        <span className="flex relative items-center">
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <label className="absolute -top-9 -left-6 w-full text-center text-nowrap">
            Finalização
          </label>
        </span>
      </li>
    </ol>
  );
};

export default Steppers;
