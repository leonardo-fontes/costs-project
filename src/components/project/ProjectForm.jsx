import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
      
    })
      .then((resp) => resp.json())
      .then((categorias) => {
        setCategories(categorias);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <form
        action="
        "
        className="flex flex-col w-96 gap-4"
      >
        <div className="mt-8">
          <Input
            type="text"
            text="Nome do projeto:"
            name="name"
            placeholder="Insira o nome do projeto"
          />
        </div>
        <div>
          <Input
            type="number"
            text="Orçamento do projeto:"
            name="budget"
            placeholder="Insira o orçamento total"
          />
        </div>
        <div>
          <Select
            name="category_id"
            text="Selecione a categoria:"
            options={categories}
          />
        </div>
        <div>
          <SubmitButton text={btnText} />
        </div>
      </form>
    </>
  );
}

export default ProjectForm;
