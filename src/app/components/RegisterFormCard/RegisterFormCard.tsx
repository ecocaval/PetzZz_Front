//? Libraries
import Image from "next/image";

import { Poppins } from 'next/font/google'

//? Images
import letterLogo from "/public/images/letter-logo.png"

import GenericButton from "../GenericInput/GenericButton";
import { RegisterForm } from "./RegisterForm/RegisterForm";

const poppinsTextFont = Poppins({
    weight: '200',
    subsets: ['latin'],
    style: ['italic']
})

const ALREADY_HAVE_LOGIN_TEXT = "Já possui uma conta? Acesse o"
const FORGOT_PASSWORD_TEXT = "Esqueceu sua senha?"

export function RegisterFormCard() {
    return (
        <div className="w-[500px] h-full rounded-2xl pt-12 bg-[#EEEDED] shadow-xl flex flex-col items-center">
            <Image
                className="min-w-[50px] mx-auto"
                src={letterLogo}
                width={60}
                height={200}
                alt="Petzzz logo"
            />
            <p className={`${poppinsTextFont.className} text-sm flex gap-2 mt-8 text-left me-28 mb-2`}>
                {ALREADY_HAVE_LOGIN_TEXT}
                <strong className="font-semibold translate-x-[-10%]">login</strong>
            </p>
            <RegisterForm />
            <p className={`${poppinsTextFont.className} text-sm flex gap-2 mt-4 text-left me-36`}>
                {FORGOT_PASSWORD_TEXT}
                <strong className="font-semibold translate-x-[-2%]">Clique aqui</strong>
            </p>
            <GenericButton extraClassConfigs="mt-6">
                {"Cadastrar"}
            </GenericButton>
        </div >
    )
}
