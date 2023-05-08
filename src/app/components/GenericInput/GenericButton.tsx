import '@/app/globals.css'

interface GenericButtonProps {
    buttonTextColor?: string
    extraClassConfigs?: string //? Para passar uma configuração extra de style ao button
    children?: React.ReactNode
}

export default function GenericButton({ buttonTextColor, children, extraClassConfigs }: GenericButtonProps) {
    return (
        <>
            <button className={'p-4 px-6 shadow-lg rounded-lg bg-[var(--main-blue-bg)] ' + (buttonTextColor || "text-white") + " " + extraClassConfigs}>
                {children}
            </button>
        </>
    )
}