import Loading from "../layout/Loading";
import Container from "../layout/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Project() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

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

  return (
    <>
      {project.name ? (
        <div className="p-[2em] mx-auto container">
          <Container>
            <div className="border-b-[1px] border-solid border-[#7a7a7a] mb-[1.2em] pb-[1.2em] flex flex-wrap justify-between">
              <h1 className="bg-[#222] text-[#FFBB33] p-[0.4em] font-bold text-4xl">Projeto: {project.name}</h1>
              <button className="bg-[#222] text-[#fff] py-[0.5em] px-[1em] hover:text-[#FFBB33] duration-300 cursor-pointer max-h-[40px]" onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar Projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className="w-[100%] mt-4">
                  <p className="mb-[.4em] text-[#7a7a7a] text-lg">
                    <span className="font-bold text-black">Categoria: </span>{project.category.name}
                  </p>
                  <p className="mb-[.4em] text-[#7a7a7a] text-lg">
                    <span className="font-bold text-black">Total de Orçamento: </span>R${project.budget}
                  </p>
                  <p className="mb-[.4em] text-[#7a7a7a] text-lg">
                    <span className="font-bold text-black">Total Utilizado: </span>R${project.cost}
                  </p>
                </div>
              ) : (
                <div className="w-[100%]">
                  <p>Detalhes do projeto</p>
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
