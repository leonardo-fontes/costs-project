function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-bold text-xl text-[#222]" htmlFor={name}>{text}</label>
      <input
        className="p-2 w-full "
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}

export default Input;
