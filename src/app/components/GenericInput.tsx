interface GenericInputProps {
    placeHolderText: string
}

export function GenericInput({ placeHolderText }: GenericInputProps) {
    return (
        <div>
            <input className="p-2 rounded" placeholder={placeHolderText} />
            
        </div>
    )
}