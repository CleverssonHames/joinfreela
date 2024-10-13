import ButtonStandart from "./ButtonStandart";
import { motion } from "framer-motion";

const Finalizacao = ({ alteratela }) => {
  return (
    <div className="bg-white p-4 rounded-3xl my-14Z">
      <div className="flex flex-col gap-10">
        <h5 className="text-red-500 text-2xl font-bold">
          Cadastro concluído com sucesso!
        </h5>
        <p className="text-xl">
          Olá <strong>Jose Carlos</strong>,
        </p>
        <p className="text-xl">
          Muito obrigado por se cadastrar no{" "}
          <strong className="text-red-500">Joinfreela</strong>!
        </p>
        <p className="text-xl">
          Estamos empolgados por você fazer parte da nossa comunidade de
          freelancers. Em breve, você terá acesso a uma vasta gama de
          oportunidades para conectar-se com clientes e projetos que combinam
          com suas habilidades e interesses.
        </p>
        <div className="flex justify-between">
          <ButtonStandart
            nome={"Voltar"}
            tela={"freelancer"}
            direcao={"left"}
            funcao={alteratela}
          />
          <ButtonStandart nome={"Feed de vagas"} />
        </div>
      </div>
    </div>
  );
};

export default Finalizacao;
