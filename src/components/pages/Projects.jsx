import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import LinkButton from "../layout/LinkButton";

function Projects() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className="w-full flex flex-col container mx-auto ">
      <div className="flex justify-between items-start py-14 ">
        <h1 className="font-bold text-4xl text-[#222]">Meus Projetos</h1>
        <LinkButton
          className="bg-[#222] text-[#fff] py-[0.5em] px-[1em] font-bold text-lg hover:text-[#ffbb33] duration-300 "
          to="/newproject"
          texto="Criar Projeto"
        />
      </div>
      {message && <Message type="success" msg={message} />}
      <div>
        <p>projetos...</p>
      </div>
    </div>
  );
}

export default Projects;
