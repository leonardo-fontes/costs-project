import ProjectForm from "../project/ProjectForm";

function NewProject() {
  return (
    <>
      <div className="py-12 flex flex-col justify-center items-center bg-[#eee] ">
        <h1 className="font-bold text-4xl mb-4">Criar Projeto</h1>
        <p className="text-[#7b7b7b]">
          Crie seu projeto para depois adicionar os serviços
        </p>
        <ProjectForm/>
      </div>
    </>
  );
}

export default NewProject;
