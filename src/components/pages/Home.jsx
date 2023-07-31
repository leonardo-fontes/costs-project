import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-[#eee]">
        <h1 className="text-5xl font-bold my-12">
          Bem vindo ao{" "}
          <span className="bg-[#222] text-[#ffbb33] px-2 ">Costs</span>
        </h1>
        <p className="font-normal text-lg text-[#7b7b7b] pb-6">
          Comece a gerenciar seus projetos agora mesmo!
        </p>
        <LinkButton className="bg-[#222] text-[#fff] py-[0.5em] px-[1em] font-bold text-lg hover:text-[#ffbb33] duration-300 " to="/newproject" texto="Criar Projeto" />
        <img src={savings} className="py-12 w-[30rem]" alt="Costs" />
      </section>
    </>
  );
}

export default Home;
