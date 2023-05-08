import '@/app/globals.css'

interface PenIconProps {
    colorToFill?: string
}

export default function PenIcon({ colorToFill }: PenIconProps) {
    return (
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12L8 16H18V12H12ZM9.06 3.19L0 12.25V16H3.75L12.81 6.94L9.06 3.19ZM15.71 4.04C16.1 3.65 16.1 3 15.71 2.63L13.37 0.29C13.17 0.09 12.92 0 12.66 0C12.41 0 12.15 0.1 11.96 0.29L10.13 2.12L13.88 5.87L15.71 4.04Z"
                fill={colorToFill || "var(--icons-main-color)"} />
        </svg>
    )
}
