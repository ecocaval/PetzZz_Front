import "@/app/globals.css";

interface HeartFilledIconProps {
  colorToFill?: string;
}

export default function HeartFilledIcon({ colorToFill }: HeartFilledIconProps) {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.875 0C9.57 0 8.3175 0.6075 7.5 1.56C6.6825 0.6075 5.43 0 4.125 0C1.815 0 0 1.8075 0 4.125C0 6.9525 2.55 9.27 6.4125 12.7725L7.5 13.7625L8.5875 12.7725C12.45 9.27 15 6.9525 15 4.125C15 1.8075 13.185 0 10.875 0Z"
        fill="#B52626"
      />
    </svg>
  );
}
