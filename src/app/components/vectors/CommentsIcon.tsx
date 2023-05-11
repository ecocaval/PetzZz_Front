import "@/app/globals.css";

interface CommentsIconProps {
  colorToFill?: string;
}

export default function CommentsIcon({ colorToFill }: CommentsIconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.81818 12.7273H0V1.81818C0 1.33597 0.191558 0.873508 0.532533 0.532533C0.873508 0.191558 1.33597 0 1.81818 0H16.3636V1.81818H1.81818V12.7273ZM10 20C9.75889 20 9.52766 19.9042 9.35718 19.7337C9.18669 19.5632 9.09091 19.332 9.09091 19.0909V16.3636H5.45455C4.97233 16.3636 4.50987 16.1721 4.1689 15.8311C3.82792 15.4901 3.63636 15.0277 3.63636 14.5455V5.45455C3.63636 4.97233 3.82792 4.50987 4.1689 4.1689C4.50987 3.82792 4.97233 3.63636 5.45455 3.63636H18.1818C18.664 3.63636 19.1265 3.82792 19.4675 4.1689C19.8084 4.50987 20 4.97233 20 5.45455V14.5455C20 15.0277 19.8084 15.4901 19.4675 15.8311C19.1265 16.1721 18.664 16.3636 18.1818 16.3636H14.4545L11.0909 19.7364C10.9091 19.9 10.6909 20 10.4545 20H10ZM7.27273 7.27273V9.09091H16.3636V7.27273H7.27273ZM7.27273 10.9091V12.7273H14.5455V10.9091H7.27273Z"
        fill="#00558B"
      />
    </svg>
  );
}
