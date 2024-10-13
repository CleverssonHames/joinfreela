import { useState } from "react";
import logo from "../assets/img/logo.png";
import DadosFreelancer from "../components/DadosFreelancer";
import TipoCadastro from "../components/TipoCadastro";
import DadosEmpresa from "../components/DadosEmpresa";
import Steppers from "../components/Steppers";
import Finalizacao from "../components/Finalização";

const Registro = () => {
  const [telaTpCad, setTelaTpCad] = useState(true);
  const [telaDadosFreela, setTelaDadosFreela] = useState(false);
  const [telaDadosEmpresa, setTelaDadosEmpresa] = useState(false);
  const [telaFinalizacao, setTelaFinalizacao] = useState(false);

  function limpaTela() {
    setTelaDadosEmpresa(false);
    setTelaDadosFreela(false);
    setTelaTpCad(false);
    setTelaFinalizacao(false);
  }

  function alteraTela(tela) {
    limpaTela();
    console.log(tela);
    switch (tela) {
      case "freelancer":
        setTelaDadosFreela(true);
        break;
      case "empresa":
        setTelaDadosEmpresa(true);
        break;
      case "tipocadastro":
        setTelaTpCad(true);
        break;
      case "finalizacao":
        setTelaFinalizacao(true);
        break;

      default:
        break;
    }
  }

  return (
    <div className="flex flex-col items-center ">
      <div className="overflow-hidden w-[874px]">
        {telaTpCad && (
          <div className="flex items-center gap-2 p-2  ">
            <p className="text-white text-center text-2xl">
              Você está fazendo um ótima escolha ao realizar o seu cadastro em
              nossa plataforma! 😍
            </p>
          </div>
        )}
        <div className="flex justify-center p-2 mt-14">
          <Steppers />
        </div>
        <div>
          {telaTpCad && <TipoCadastro alteratela={alteraTela} />}
          {telaDadosFreela && <DadosFreelancer alteratela={alteraTela} />}
          {telaDadosEmpresa && <DadosEmpresa alteratela={alteraTela} />}
          {telaFinalizacao && <Finalizacao alteratela={alteraTela} />}
        </div>
      </div>
    </div>
  );
};

export default Registro;
