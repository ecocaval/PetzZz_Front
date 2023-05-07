interface GenericInputProps {
    placeHolderText: string
}

export default function GenericInput({ placeHolderText }: GenericInputProps) {
    return (
        <div>
            <input className="p-2 rounded" placeholder={placeHolderText} />
            
        </div>
    )
}