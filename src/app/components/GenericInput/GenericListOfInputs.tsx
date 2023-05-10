interface GenericListOfInputs {
  inputName?: string;
  options?: string[];
  extraClassConfigs?: string;
}

export default function GenericListOfInputs({
  options,
  inputName,
  extraClassConfigs,
}: GenericListOfInputs) {
  return (
    <>
      <select
        className={"w-36 p-1 mr-8 rounded " + extraClassConfigs}
        placeholder="asdasd"
        name={inputName}
        id={inputName}
      >
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
