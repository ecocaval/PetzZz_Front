import "@/app/globals.css";

interface ListIconProps {
  colorToFill?: string;
}

export default function ListIcon({ colorToFill }: ListIconProps) {
  return (
    <svg
      width="18"
      height="13"
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H18V2.16667H0V0ZM0 5.41667H18V7.58333H0V5.41667ZM0 10.8333H18V13H0V10.8333Z"
        fill="white"
        fill-opacity="0.4"
      />
    </svg>
  );
}
