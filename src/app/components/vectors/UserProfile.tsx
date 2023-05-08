import '@/app/globals.css'

interface UserProfileProps {
    colorToFill?: string
}

export default function UserProfile({ colorToFill }: UserProfileProps) {
    return (
        <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_111_1738)">
                <path d="M11.5 0C12.8924 0 14.2277 0.553123 15.2123 1.53769C16.1969 2.52226 16.75 3.85761 16.75 5.25C16.75 6.64239 16.1969 7.97775 15.2123 8.96231C14.2277 9.94688 12.8924 10.5 11.5 10.5C10.1076 10.5 8.77226 9.94688 7.78769 8.96231C6.80312 7.97775 6.25 6.64239 6.25 5.25C6.25 3.85761 6.80312 2.52226 7.78769 1.53769C8.77226 0.553123 10.1076 0 11.5 0ZM11.5 2.625C10.8038 2.625 10.1361 2.90156 9.64385 3.39384C9.15156 3.88613 8.875 4.55381 8.875 5.25C8.875 5.94619 9.15156 6.61387 9.64385 7.10615C10.1361 7.59844 10.8038 7.875 11.5 7.875C12.1962 7.875 12.8639 7.59844 13.3562 7.10615C13.8484 6.61387 14.125 5.94619 14.125 5.25C14.125 4.55381 13.8484 3.88613 13.3562 3.39384C12.8639 2.90156 12.1962 2.625 11.5 2.625ZM11.5 11.8125C15.0044 11.8125 22 13.5581 22 17.0625V21H1V17.0625C1 13.5581 7.99562 11.8125 11.5 11.8125ZM11.5 14.3062C7.60187 14.3062 3.49375 16.2225 3.49375 17.0625V18.5063H19.5063V17.0625C19.5063 16.2225 15.3981 14.3062 11.5 14.3062Z" fill="#00558B" />
            </g>
            <defs>
                <filter id="filter0_d_111_1738" x="0" y="0" width="23" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_111_1738" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_111_1738" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}
