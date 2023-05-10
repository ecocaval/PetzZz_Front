import FilterHeader from "../components/FilterHeader/FilterHeader"
import ProductsList from "../components/ProductsList/Products"

export const metadata = {
    title: 'PetzZz - Products'
  }

export default function Products(){
    return (
        <main className="flex flex-col items-center bg-[var(--light-blue-bg)]">
            <FilterHeader/>
            <ProductsList/>
        </main>
    )
}