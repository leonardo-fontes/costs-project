import ProjectForm from "../project/ProjectForm";

function NewProject() {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="font-bold text-4xl mb-8">Criar Projeto</h1>
        <p className="text-[#7b7b7b] text-lg">
          Crie seu projeto para depois adicionar os serviços
        </p>
        <ProjectForm btnText="Criar Projeto" />
      </div>
    </>
  );
}

export default NewProject;
