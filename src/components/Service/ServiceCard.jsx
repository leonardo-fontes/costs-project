import { BsFillTrashFill } from "react-icons/bs";
import styles from "../project/ProjectCard.module.css";

function ServiceCard({ id, name, cost, description, handleRemove }) {
    const btnClass =
    "bg-[#FFF] text-base gap-1 text-[#222] py-1.5 px-2 cursor-pointer flex items-center justify-center border-[1px] border-solid border-[#222] hover:bg-[#222] hover:text-[#ffbb33] transition-colors duration-200";

  const remove = (e) => {};
  return (
    <div className="p-[1em] border-solid border-[1px] rounded-md border-[#7a7a7a] w-[100%] grid col-span-1 gap-1">
      <h4 className="bg-[#222] p-2 text-xl text-[#FFBB33] font-bold mb-4">
        {name}
      </h4>
      <p className="text-[#7a7a7a]">
        <span className="font-bold ">Custo total: </span> R${cost}
      </p>
      <p>{description}</p>
      <div className="pt-5">
        <button className={btnClass} onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
