//? Icons / Vector
import LastProductAccess from "../../components/vectors/LastProductAccess";
import VisualizationMode from "../../components/vectors/VisualizationMode";
import ListIcon from "../../components/vectors/ListIcon";

export default function FilterHeader(){
    return (
        <main className="flex items-center justify-center w-screen h-20 bg-[var(--main-blue-bg)]">
            <div className="flex items-center mx-4 w-fit h-12 border-white border-r-2 border-dotted">
                <label id="ordenar" className="mr-2 text-white font-bold">Ordenar:</label>
                <input list="ordenamentos" name="ordenar" id="ordenar" className="w-36 p-1 mr-8 rounded" placeholder="Ordenar" type="text" />
                <datalist id="ordenamentos">
                    <option value="Melhor Avaliação"></option>
                    <option value="Mais procurados"></option>
                    <option value="Preço crescente"></option>
                    <option value="Preço decrescente"></option>
                </datalist>
            </div>
            <div className="flex items-center mx-4 w-fit h-12 border-white border-r-2 border-dotted">
                <label id="exibir" className="mr-2 text-white font-bold">Exibir:</label>
                <input list="exibição" name="exibir" id="exibir" className="w-36 p-1 mr-8 rounded" placeholder="Exibir" type="text" />
                <datalist id="exibição">
                    <option value="6 por página"></option>
                    <option value="12 por página"></option>
                    <option value="24 por página"></option>
                    <option value="48 por página"></option>
                </datalist>
            </div>
            <div className="flex items-center pr-8 mx-4 w-fit h-12 border-white border-r-2 border-dotted">
                <p className="text-white font-bold mr-2">Últimos produtos acessados</p>
                <LastProductAccess />
            </div>
            <div className="flex items-center justify-between mx-4 w-64 h-12">
                <p className="text-white font-bold mr-1">Modo de visualização</p>
                <VisualizationMode />
                <ListIcon/>
            </div>
            <div className="flex items-center ml-64 w-fit h-12 text-white">
                <p> <strong className="font-bold">1024</strong> produtos</p>
            </div>
        </main>
    )
}