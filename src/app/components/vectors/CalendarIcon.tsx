import '@/app/globals.css'

interface CalendarIconProps {
    colorToFill?: string
}

export default function CalendarIcon({ colorToFill }: CalendarIconProps) {
    return (
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 10H6V12H4V10ZM18 4V18C18 19.11 17.11 20 16 20H2C0.89 20 0 19.1 0 18V4C0 2.9 0.9 2 2 2H3V0H5V2H13V0H15V2H16C17.11 2 18 2.9 18 4ZM2 6H16V4H2V6ZM16 18V8H2V18H16ZM12 12V10H14V12H12ZM8 12V10H10V12H8ZM4 14H6V16H4V14ZM12 16V14H14V16H12ZM8 16V14H10V16H8Z" fill="#00558B" />
        </svg>
    )
}