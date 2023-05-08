interface GenericInputProps {
    placeHolderText: string
}

export function GenericInput({ placeHolderText }: GenericInputProps) {
    return (
        <>
            <input className="p-2 w-1/2 min-w-[140px] rounded border border-1 border-[var(--main-blue-bg)]" placeholder={placeHolderText} />
        </>
    )
}