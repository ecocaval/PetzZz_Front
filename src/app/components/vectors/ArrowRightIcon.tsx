import "@/app/globals.css";

interface ArrowRightIconProps {
  colorToFill?: string;
}

export default function ArrowRightIcon({ colorToFill }: ArrowRightIconProps) {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.480922 4.25631L0.480922 3.29447L7.70499 3.29447L5.45728 1.04675L6.13943 0.364592L9.55023 3.77539L6.13944 7.18619L5.45728 6.50403L7.70499 4.25631L0.480922 4.25631Z"
        fill="black"
      />
    </svg>
  );
}
