import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useContext } from "react";
import { TipoCadContext } from "../context/tipoCadContext";
import { motion, transform } from "framer-motion";

const TipoCadastro = ({ alteratela }) => {
  const { tipoCadastro, alteraTipoCad } = useContext(TipoCadContext);

  return (
    <motion.div
      animate={{ x: -900 }}
      transition={{ ease: "linear", duration: 1 }}
    >
      <div id="tipo-cadastro" className="bg-white p-4 rounded-3xl my-14">
        <h5 className="text-red-500 text-2xl font-bold">Tipo de cadastro</h5>
        <div className="flex flex-col mt-8">
          <label htmlFor="tipocadastro" className="text-xl font-normal">
            Para dar início ao regístro, preciso saber se deseja cadastrar uma
            empresa ou freelancer?
          </label>
          <select
            name="tipocadastro"
            id="tipocadastro"
            value={tipoCadastro}
            onChange={(e) => alteraTipoCad(e.target.value)}
            className="mt-4 border-b border-b-gray-400 outline-none"
          >
            <option value="0" disabled>
              Escolha o tipo de cadastro...
            </option>
            <option value="freelancer">Freelacer</option>
            <option value="empresa">Empresa</option>
          </select>
        </div>
        <div className="flex justify-end mt-8">
          <button
            type="button"
            className="flex gap-2 items-center bg-red-500 py-2 px-4 text-white rounded hover:bg-red-700 hover:shadow-md hover:shadow-red-400"
            onClick={() => alteratela(tipoCadastro)}
          >
            <FaArrowRight />
            Próximo
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TipoCadastro;
