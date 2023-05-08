interface HomeIconProps {
    colorToFill?: string
}

export default function HomeIcon({ colorToFill }: HomeIconProps) {
    return (
        <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4 26V16.8235H18.6V26H26.35V13.7647H31L15.5 0L0 13.7647H4.65V26H12.4Z"
                fill={colorToFill || "#00558B"} />
        </svg>
    )
}
