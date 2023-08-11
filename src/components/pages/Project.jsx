import { parse, v4 as uuidv4 } from "uuid";
import Loading from "../layout/Loading";
import ServiceCard from "../Service/ServiceCard";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import ServiceForm from "../Service/ServiceForm";
import Message from "../layout/Message";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Project() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState("");
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
          setServices(data.services);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, [id]);

  function removeService() {}

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  function createService(project) {
    setMessage("");
    const lastService = project.services[project.services.length - 1];
    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    if (newCost > parseFloat(project.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço");
      SetType("error");
      project.services.pop();

      return false;
    }

    project.cost = newCost;

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setShowServiceForm(false);
      })
      .catch((err) => console.log(err));
  }

  function editPost(project) {
    setMessage("");
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
              <div className="w-[100%] flex flex-col justify-center items-center my-4">
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText="Adicionar serviço"
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h2 className="text-2xl font-bold p-4">Serviços</h2>
            <Container className={"min-h-[50vh]"}>
              <div className="grid grid-cols-5 gap-4">
                {services.length > 0 &&
                  services.map((service) => (
                    <ServiceCard
                      id={service.id}
                      name={service.name}
                      cost={service.cost}
                      description={service.description}
                      key={service.id}
                      handleRemove={removeService}
                    />
                  ))}
                {services.length == 0 && <p>Não há serviços cadastrados.</p>}
              </div>
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
