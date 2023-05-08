import '@/app/globals.css'

interface KeyIconProps {
    colorToFill?: string
}

export default function KeyIcon({ colorToFill }: KeyIconProps) {
    return (
        <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_111_1777)">
                <path d="M10 8C8.9 8 8 7.1 8 6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6C12 7.1 11.1 8 10 8ZM15.6 4C14.8 1.7 12.6 0 10 0C6.7 0 4 2.7 4 6C4 9.3 6.7 12 10 12C12.6 12 14.8 10.3 15.6 8H19V12H23V8H26V4H15.6Z" fill="#00558B" />
            </g>
            <defs>
                <filter id="filter0_d_111_1777" x="0" y="0" width="30" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_111_1777" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_111_1777" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}
