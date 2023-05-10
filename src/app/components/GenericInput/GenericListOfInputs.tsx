interface GenericListOfInputs {
  inputText?: string;
  options?: string[];
  extraClassConfigs?: string;
}

export default function GenericListOfInputs({
  options,
  inputText,
  extraClassConfigs,
}: GenericListOfInputs) {

  return (
    <>
      <input
        list={`${inputText}-options`}
        id="ordenar"
        className={"w-36 p-1 mr-8 rounded " + extraClassConfigs}
        placeholder={inputText}
        type="text"
        autoComplete="off"
      />
      <datalist id={`${inputText}-options`}>
        {options?.map((option, index) => (
          <option key={index} value={option}></option>
        ))}
      </datalist>
    </>
  );
}
