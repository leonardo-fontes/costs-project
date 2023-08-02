import ProjectForm from "../project/ProjectForm";
import {useNavigate} from 'react-router-dom';

function NewProject() {

  const history = useNavigate();

  function createPost(project) {

    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
    .then((resp)=> resp.json())
    .then((data)=> {
      //redirect
      history('/projects', { message: 'Projeto criado com sucesso!'})
    })
    .catch((err)=> console.log(err))

  }


  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="font-bold text-4xl mb-8">Criar Projeto</h1>
        <p className="text-[#7b7b7b] text-lg">
          Crie seu projeto para depois adicionar os serviços
        </p>
        <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
      </div>
    </>
  );
}

export default NewProject;
