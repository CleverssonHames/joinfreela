import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import ButtonStandart from "./ButtonStandart";
import { motion, transform } from "framer-motion";

const DadosFreelancer = ({ alteratela }) => {
  const [nome, setNome] = useState("");
  const [ultimoNome, setUltimoNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [experiencias, setExperiencias] = useState([]);

  return (
    <motion.div animate={{ x: -200 }}>
      <div id="dados-freelancer" className="bg-white p-4 rounded-3xl my-14">
        <h5 className="text-red-500 text-2xl font-bold">Dados freelancer</h5>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="flex flex-col">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              placeholder="Informe o seu nome"
              className="border-b border-b-gray-400 outline-none"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nome">Ultimo nome:</label>
            <input
              type="text"
              placeholder="Informe o seu ultimo nome"
              className="border-b border-b-gray-400 outline-none"
              value={ultimoNome}
              onChange={(e) => setUltimoNome(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="flex flex-col">
            <label htmlFor="nome">Telefone:</label>
            <input
              type="text"
              placeholder="(47)99999-999"
              className="border-b border-b-gray-400 outline-none"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nome">Data de nascimento:</label>
            <input
              type="date"
              className="border-b border-b-gray-400 outline-none"
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
            />
          </div>
        </div>
        <div className="grid gap-4 mt-8">
          <div className="flex flex-col">
            <label htmlFor="nome">E-mail:</label>
            <input
              type="text"
              className="border-b border-b-gray-400 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="grid gap-4 mt-8">
          <div className="flex flex-col">
            <label htmlFor="nome">Experiências:</label>
            <input
              type="text"
              className="border-b border-b-gray-400 outline-none"
              value={experiencias}
              onChange={(e) => setExperiencias(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="flex flex-col">
            <label htmlFor="cidade" className="text-xl font-normal">
              Cidade:
            </label>
            <select
              name="cidade"
              id="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className="mt-4 border-b border-b-gray-400 outline-none"
            >
              <option value="1">Joinville</option>
              <option value="2">Pirabeiraba</option>
            </select>
          </div>
          <div>
            <div className="flex flex-col">
              <label htmlFor="bairro" className="text-xl font-normal">
                Bairro:
              </label>
              <select
                name="bairro"
                id="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                className="mt-4 border-b border-b-gray-400 outline-none"
              >
                <option value="1">Itaum</option>
                <option value="2">Guanabara</option>
                <option value="2">Boa vista</option>
                <option value="2">Floresta</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <ButtonStandart
            nome={"Voltar"}
            direcao={"left"}
            tela={"tipocadastro"}
            funcao={alteratela}
          />
          <ButtonStandart
            nome={"Próximo"}
            direcao={"rigth"}
            tela={"finalizacao"}
            funcao={alteratela}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default DadosFreelancer;
