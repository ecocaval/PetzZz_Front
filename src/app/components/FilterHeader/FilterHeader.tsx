//? Libraries
import { Lato } from "next/font/google";

//? Icons / Vector
import LastProductAccess from "../../components/vectors/LastProductAccess";
import VisualizationMode from "../../components/vectors/VisualizationMode";
import ListIcon from "../../components/vectors/ListIcon";
import GenericListOfInputs from "../GenericInput/GenericListOfInputs";

const latoTextFont = Lato({
  weight: "300",
  subsets: ["latin"],
  style: ["normal"],
});

export default function FilterHeader() {
  const orderOptions = [
    "Melhor Avaliação",
    "Mais procurados",
    "Preço crescente",
    "Preço decrescente",
  ];

  const perPageOptions = [
    "6 por página",
    "12 por página",
    "24 por página",
    "48 por página",
  ];

  return (
    <main
      className={`${latoTextFont.className} flex items-center justify-center w-screen h-20 bg-[var(--main-blue-bg)]`}
    >
      <div className="flex items-center mx-4 w-fit h-12 border-white border-r-2 border-dotted">
        <label id="ordenar" className="mr-2 text-white font-bold">
          Ordenar:
        </label>
        <GenericListOfInputs 
            options={orderOptions}
            inputName="Ordenar"
        />
      </div>
      <div className="flex items-center mx-4 w-fit h-12 border-white border-r-2 border-dotted">
        <label id="exibir" className="mr-2 text-white font-bold">
          Exibir:
        </label>
        <GenericListOfInputs
            options={perPageOptions}
            inputName="Exibir"
        />
      </div>
      <div className="flex items-center pr-8 mx-4 w-fit h-12 border-white border-r-2 border-dotted">
        <p className="text-white font-bold mr-2">Últimos produtos acessados</p>
        <LastProductAccess />
      </div>
      <div className="flex items-center justify-between mx-4 w-64 h-12">
        <p className="text-white font-bold mr-1">Modo de visualização</p>
        <VisualizationMode />
        <ListIcon />
      </div>
      <div className="flex items-center ml-64 w-fit h-12 text-white">
        <p>
          <strong className="font-bold">1024</strong> produtos
        </p>
      </div>
    </main>
  );
}
