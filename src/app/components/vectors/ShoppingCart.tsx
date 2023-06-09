import '@/app/globals.css'

interface ShoppingCartProps {
    colorToFill?: string
}

export default function ShoppingCart({ colorToFill }: ShoppingCartProps) {
    return (
        <svg className="cursor-pointer" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M23.4 23.4C23.4 24.843 22.243 26 20.8 26C19.357 26 18.2 24.83 18.2 23.4C18.2 21.957 19.357 20.8 20.8 20.8C22.243 20.8 23.4 21.97 23.4 23.4ZM7.8 20.8C6.357 20.8 5.2 21.957 5.2 23.4C5.2 24.83 6.357 26 7.8 26C9.243 26 10.4 24.843 10.4 23.4C10.4 21.957 9.243 20.8 7.8 20.8ZM8.06 16.419L8.021 16.575C8.021 16.757 8.164 16.9 8.346 16.9H23.4V19.5H7.8C6.357 19.5 5.2 18.33 5.2 16.9C5.2 16.445 5.317 16.016 5.512 15.652L7.28 12.467L2.6 2.6H0V0H4.251L5.473 2.6H24.7C25.415 2.6 26 3.185 26 3.9C26 4.121 25.935 4.342 25.844 4.55L21.19 12.961C20.748 13.754 19.89 14.3 18.915 14.3H9.23L8.06 16.419ZM9.75 11.7H11.7V9.1H8.528L9.75 11.7ZM13 9.1V11.7H16.9V9.1H13ZM16.9 7.8V5.2H13V7.8H16.9ZM20.943 9.1H18.2V11.7H19.5L20.943 9.1ZM23.114 5.2H18.2V7.8H21.671L23.114 5.2ZM6.682 5.2L7.904 7.8H11.7V5.2H6.682Z"
                fill={colorToFill || "var(--icons-main-color)"} />
        </svg>
    )
}
