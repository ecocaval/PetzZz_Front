//? Libraries
import Image from "next/image";

//? Components
import { GenericInput } from "../GenericInput/GenericInput";

//? Images
import logo from "/public/images/logo.png"
import letterLogo from "/public/images/letter-logo.png"

//? Icons / Vector
import HomeIcon from "../vectors/HomeIcon";
import Products from "../vectors/Products";
import DogPaw from "../vectors/DogPaw";
import UserProfileFilled from "../vectors/UserProfileFilled";
import ShoppingCart from "../vectors/ShoppingCart";
import SearchIcon from "../vectors/SearchIcon";

export function Header() {
    return (
        <header className="flex items-center justify-between px-12 h-28 bg-[var(--light-yellow-bg)] max-[500px]:px-6">
            {/* Desktop logo */}
            <Image
                className="px-4 min-w-[200px] max-[1000px]:hidden"
                src={logo}
                width={280}
                height={200}
                alt="Petzzz logo"
            />
            {/* Mobile logo */}
            <Image
                className="px-2 min-w-[50px] min-[1000px]:hidden"
                src={letterLogo}
                width={80}
                height={200}
                alt="Petzzz logo"
            />
            <div className="flex justify-between w-1/2 max-[1250px]:w-full border border-2 ps-4 border-black max-[700px]:justify-center max-[400px]:p-0">
                <GenericInput
                    placeHolderText={"Escolha aqui sua busca..."}
                    extraClassConfigs="w-full max-w-[400px]: mx-2"
                >
                    <SearchIcon />
                </GenericInput>
                <section className="flex w-4/6 ps-8 gap-x-4 justify-between items-center min-[1000px]:ps-8 max-[700px]:hidden">
                    <HomeIcon />
                    <Products />
                    <DogPaw />
                    <UserProfileFilled />
                    <ShoppingCart />
                </section>
            </div>
        </header>
    )
}
