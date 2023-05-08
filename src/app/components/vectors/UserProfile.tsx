import '@/app/globals.css'

interface UserProfileProps {
    colorToFill?: string
}

export default function UserProfile({ colorToFill }: UserProfileProps) {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13 0C14.7239 0 16.3772 0.684819 17.5962 1.90381C18.8152 3.12279 19.5 4.77609 19.5 6.5C19.5 8.22391 18.8152 9.87721 17.5962 11.0962C16.3772 12.3152 14.7239 13 13 13C11.2761 13 9.62279 12.3152 8.40381 11.0962C7.18482 9.87721 6.5 8.22391 6.5 6.5C6.5 4.77609 7.18482 3.12279 8.40381 1.90381C9.62279 0.684819 11.2761 0 13 0ZM13 16.25C20.1825 16.25 26 19.1588 26 22.75V26H0V22.75C0 19.1588 5.8175 16.25 13 16.25Z"
                fill={colorToFill || "var(--icons-main-color)"} />
        </svg>
    )
}
