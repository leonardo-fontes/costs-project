import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";

function ProjectCard({ id, name, budget, category, handleRemove }) {
  const btnClass =
    "bg-[#FFF] text-base gap-1 text-[#222] py-1.5 px-2 cursor-pointer flex items-center justify-center border-[1px] border-solid border-[#222] hover:bg-[#222] hover:text-[#ffbb33] transition-colors duration-200";

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
  return (
    <div className="p-[1em] border-solid border-[1px] rounded-md border-[#7a7a7a] w-[100%] grid col-span-1 gap-4">
      <h4 className="bg-[#222] p-2 text-xl text-[#FFBB33] font-bold mb-4 ">
        {name.toUpperCase()}
      </h4>
      <p className="text-[#7a7a7a] mb-1">
        <span className="font-bold ">Orçamento:</span> R${budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>
      <div className="mt-[1.2em] flex items-center gap-4">
        <Link to="/" className={btnClass}>
          <BsPencil /> Editar
        </Link>
        <button className={btnClass} onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
