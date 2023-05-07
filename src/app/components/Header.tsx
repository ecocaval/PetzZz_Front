import Image from "next/image";
import GenericInput from "./GenericInput";

export default function Header() {
    return (
        <header className="flex items-center justify-around h-24 bg-[var(--light-yellow-bg)]">
            <Image
                src="/logo.png"
                width={200}
                height={200}
                alt="Petzzz logo"
            />
            <GenericInput placeHolderText={"Escolha aqui sua busca"}/>

        </header>
    )
}
