interface ProductInfo {
    description?: string;
    price?: number;
}

export function ProductInfo({description, price}: ProductInfo) {
  return (
    <div className="h-32 border border-solid border-[var(--border-blue)] rounded-b-xl flex flex-col items-center">
      <div className="flex items-center justify-between px-2">
        <p className="my-2 mx-8 text-xs text-justify font-medium">
          Caminha super confortavel para seu pet descansar
        </p>
      </div>
      <div className="flex items-center my-4">
        <p className="mx-4 text-xl font-bold">
          R${price}
        </p>
        <p className="mx-4 text-xs text-left font-medium text-[var(--light-grey)]">
          Parcele em até 12x sem juros
        </p>
      </div>
    </div>
  );
}