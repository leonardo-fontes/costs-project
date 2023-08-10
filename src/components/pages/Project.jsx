import Loading from "../layout/Loading";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Project() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, SetType] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  function editPost(project) {
    setMessage('')
    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto!");
      SetType("error");
      return false;
    }
    
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(!showProjectForm);
        setMessage("Projeto atualizado com sucesso!");
        SetType("success");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {project.id ? (
        <div className="mx-auto container justify-center">
          <Container>
            {message && <Message type={type} msg={message} />}
            <div className="border-b-[1px] p-[2em] border-solid border-[#7a7a7a] mb-[1.2em] pb-[1.2em] flex flex-wrap justify-between">
              <h1 className="bg-[#222] text-[#FFBB33] p-[0.4em] font-bold text-4xl">
                Projeto: {project.name}
              </h1>
              <button
                className="bg-[#222] text-[#fff] py-[0.5em] px-[1em] hover:text-[#FFBB33] duration-300 cursor-pointer max-h-[40px]"
                onClick={toggleProjectForm}
              >
                {!showProjectForm ? "Editar Projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className="w-[100%] mt-4">
                  <p className="mb-[.4em] text-[#7a7a7a] text-lg">
                    <span className="font-bold text-black">Categoria: </span>
                    {project.category.name}
                  </p>
                  <p className="mb-[.4em] text-[#7a7a7a] text-lg">
                    <span className="font-bold text-black">
                      Total de Orçamento:{" "}
                    </span>
                    R${project.budget}
                  </p>
                  <p className="mb-[.4em] text-[#7a7a7a] text-lg">
                    <span className="font-bold text-black">
                      Total Utilizado:{" "}
                    </span>
                    R${project.cost}
                  </p>
                </div>
              ) : (
                <div className="w-[100%] flex flex-col justify-center items-center mt-8">
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className="border-b-[1px] border-solid border-[#7a7a7a] flex flex-wrap justify-between items-center">
                <h2 className="text-2xl font-bold">Adicione um serviço: </h2>
                <button
                className="bg-[#222] text-[#fff] py-[0.5em] px-[1em] hover:text-[#FFBB33] duration-300 cursor-pointer max-h-[40px]"
                onClick={toggleServiceForm}
              >
                {!showServiceForm ? "Adicionar serviço" : "Fechar"}
              </button>
              <div className="w-[100%] flex flex-col justify-center items-center mt-8">
                {showServiceForm && <div>form</div> }
              </div>
            </div>
            <h2>Serviços</h2>
            <Container>
              <p>itens de Serviços</p>
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
