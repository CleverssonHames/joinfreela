import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const DadosEmpresa = ({ alteratela }) => {
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [fundacao, setFundacao] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [atividades, setAtividades] = useState([]);

  return (
    <div
      id="dados-empresa"
      className="bg-white p-4 rounded-3xl my-14 transition-all duration-700 animate-[frameOut_1s_ease-in-out]"
    >
      <h5 className="text-red-500 text-2xl font-bold">Dados da empresa</h5>
      <form action="">
        <div className="grid gap-4 mt-8">
          <div className="flex flex-col">
            <label htmlFor="nome">Nome fantasia:</label>
            <input
              type="text"
              placeholder="Informe o nome fantasia da sua empresa"
              className="border-b border-b-gray-400 outline-none"
              value={nomeFantasia}
              onChange={(e) => setNomeFantasia(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="flex flex-col">
            <label htmlFor="nome">CNPJ:</label>
            <input
              type="text"
              placeholder=""
              className="border-b border-b-gray-400 outline-none"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
          </div>
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
            <label htmlFor="nome">Data de fundação:</label>
            <input
              type="date"
              className="border-b border-b-gray-400 outline-none"
              value={fundacao}
              onChange={(e) => setFundacao(e.target.value)}
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
            <label htmlFor="nome">Atividades da empresa:</label>
            <input
              type="text"
              className="border-b border-b-gray-400 outline-none"
              value={atividades}
              onChange={(e) => setatividades(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="flex flex-col">
            <label htmlFor="cidade" className="font-normal">
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
              <label htmlFor="bairro" className="font-normal">
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
        <div className="flex justify-end mt-8">
          <button
            className="flex gap-2 items-center bg-red-500 py-2 px-4 text-white rounded hover:bg-red-700 hover:shadow-md hover:shadow-red-400"
            onClick={() => alteratela("pagamento")}
          >
            <FaArrowRight />
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
};

export default DadosEmpresa;
