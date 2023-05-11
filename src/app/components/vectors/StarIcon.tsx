import "@/app/globals.css";

interface StarIconProps {
  colorToFill?: string;
}

export default function StarIcon({ colorToFill }: StarIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 8.27579L2.304 10.1874L3.1455 6.58316L0.3235 4.15789L4.0465 3.84632L5.5 0.444211L6.9535 3.84632L10.6765 4.15789L7.8545 6.58316L8.696 10.1874"
        fill="#00558B"
      />
    </svg>
  );
}
