//? Components
import { GenericInput } from "../../GenericInput/GenericInput";

//? Icon
import PenIcon from "../../vectors/PenIcon";
import UserProfile from "../../vectors/UserProfile";
import CalendarIcon from "../../vectors/CalendarIcon";
import IdCardIcon from "../../vectors/IdCardIcon";
import KeyIcon from "../../vectors/KeyIcon";

export function RegisterForm() {
    return (
        <>
            <form className="w-full px-16">
                <GenericInput
                    placeHolderText="Seu nome..."
                    useResponsivePlaceholder={false}
                    extraClassConfigs="w-full mx-auto my-3"
                    iconsExtraClassConfigs="right-[2%]"
                >
                    <PenIcon />
                </GenericInput>
                <GenericInput
                    placeHolderText="Seu email..."
                    useResponsivePlaceholder={false}
                    extraClassConfigs="w-full mx-auto my-3"
                >
                    <UserProfile />
                </GenericInput>
                <GenericInput
                    placeHolderText="Sua data de nascimento..."
                    useResponsivePlaceholder={false}
                    extraClassConfigs="w-full mx-auto my-3"
                    iconsExtraClassConfigs="right-[1%]"
                >
                    <CalendarIcon />
                </GenericInput>
                <GenericInput
                    placeHolderText="Seu cpf..."
                    useResponsivePlaceholder={false}
                    extraClassConfigs="w-full mx-auto my-3"
                >
                    <IdCardIcon />
                </GenericInput>
                <GenericInput
                    placeHolderText="Sua senha..."
                    useResponsivePlaceholder={false}
                    extraClassConfigs="w-full mx-auto my-3"
                    iconsExtraClassConfigs="right-[-2%]"
                >
                    <KeyIcon />
                </GenericInput>
                <GenericInput
                    placeHolderText="Confirme sua senha..."
                    useResponsivePlaceholder={false}
                    extraClassConfigs="w-full mx-auto my-3"
                    iconsExtraClassConfigs="right-[-2%]"
                >
                    <KeyIcon />
                </GenericInput>
            </form>
        </>
    )
}