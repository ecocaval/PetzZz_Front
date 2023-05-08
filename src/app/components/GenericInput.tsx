interface GenericInputProps {
    placeHolderText: string
}

export function GenericInput({ placeHolderText }: GenericInputProps) {
    return (
        <div>
            <input className="p-2 rounded border border-1 border-[var(--main-blue-bg)]" placeholder={placeHolderText} />
        </div>
    )
}