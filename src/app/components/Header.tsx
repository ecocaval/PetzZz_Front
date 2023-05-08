//? Libraries
import Image from "next/image";

//? Components
import { GenericInput } from "./GenericInput";

//? Images
import logo from "/public/images/logo.png"
import letterLogo from "/public/images/letter-logo.png"

//? Icons / Vector
import HomeIcon from "./vectors/HomeIcon";
import Products from "./vectors/Products";
import DogPaw from "./vectors/DogPaw";
import UserProfile from "./vectors/UserProfile";
import ShoppingCart from "./vectors/ShoppingCart";

export function Header() {
    return (
        <header className="flex items-center justify-between px-12 h-28 bg-[var(--light-yellow-bg)]">
            <Image
                className="max-[1000px]:hidden"
                src={logo}
                width={200}
                height={200}
                alt="Petzzz logo"
            />
            <Image
                className="min-[1000px]:hidden"
                src={letterLogo}
                width={50}
                height={200}
                alt="Petzzz logo"
            />
            <div className="flex justify-between w-[600px] border border-2 ps-4 border-black max-[650px]:justify-center">
                <GenericInput placeHolderText={"Escolha aqui sua busca"} />
                <section className="flex w-1/2 ps-4 justify-between items-center min-[1000px]:ps-16 max-[650px]:hidden">
                    <HomeIcon />
                    <Products />
                    <DogPaw />
                    <UserProfile />
                    <ShoppingCart />
                </section>
            </div>
        </header>
    )
}
