function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold text-xl text-[#222]" htmlFor={name}>
        {text}
      </label>
      <select className="p-2" name={name} id={name}>
        <option>Selecione uma opção:</option>
        {options?.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
