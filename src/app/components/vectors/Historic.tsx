import '@/app/globals.css'

interface HistoricProps {
    colorToFill?: string
}

export default function Historic({ colorToFill }: HistoricProps) {
    return (
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18 10.11V4C18 2.9 17.11 2 16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.11 0.9 20 2 20H8.11C9.37 21.24 11.09 22 13 22C16.87 22 20 18.87 20 15C20 13.09 19.24 11.37 18 10.11ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM3 6H15V8H3V6ZM6.08 16H3V14H6.08C6.03 14.33 6 14.66 6 15C6 15.34 6.03 15.67 6.08 16ZM3 12V10H8.11C7.5 10.57 7.04 11.25 6.68 12H3ZM13 20C10.24 20 8 17.76 8 15C8 12.24 10.24 10 13 10C15.76 10 18 12.24 18 15C18 17.76 15.76 20 13 20ZM13.5 15.25L16.36 16.94L15.61 18.16L12 16V11H13.5V15.25Z"
                fill={colorToFill || "var(--icons-main-color)"} />
        </svg>
    )
}
