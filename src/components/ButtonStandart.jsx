import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const ButtonStandart = ({ nome, tela, direcao, funcao }) => {
  if (direcao == "left") {
    return (
      <button
        className="flex gap-2 items-center bg-red-500 py-2 px-4 text-white rounded hover:bg-red-700 hover:shadow-md hover:shadow-red-400"
        onClick={() => funcao(tela)}
      >
        <FaArrowLeft />
        {nome}
      </button>
    );
  }
  return (
    <button
      className="flex gap-2 items-center bg-red-500 py-2 px-4 text-white rounded hover:bg-red-700 hover:shadow-md hover:shadow-red-400"
      onClick={() => funcao(tela)}
    >
      {nome}
      <FaArrowRight />
    </button>
  );
};

export default ButtonStandart;
