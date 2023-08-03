import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
      <div className="grid grid-cols-5 gap-4">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Projects;
