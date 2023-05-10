import "@/app/globals.css";

interface VisualizationModerops {
  colorToFill?: string;
}

export default function VisualizationMode({
  colorToFill,
}: VisualizationModerops) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.9 0H17.1C17.6039 0 18.0872 0.199623 18.4435 0.554955C18.7998 0.910288 19 1.39222 19 1.89474V16.1053C19 16.6078 18.7998 17.0897 18.4435 17.445C18.0872 17.8004 17.6039 18 17.1 18H1.9C1.39609 18 0.912816 17.8004 0.556497 17.445C0.200178 17.0897 0 16.6078 0 16.1053V1.89474C0 1.39222 0.200178 0.910288 0.556497 0.554955C0.912816 0.199623 1.39609 0 1.9 0ZM1.9 3.78947V6.63158H5.7V3.78947H1.9ZM7.6 3.78947V6.63158H11.4V3.78947H7.6ZM17.1 6.63158V3.78947H13.3V6.63158H17.1ZM1.9 8.52632V11.3684H5.7V8.52632H1.9ZM1.9 16.1053H5.7V13.2632H1.9V16.1053ZM7.6 8.52632V11.3684H11.4V8.52632H7.6ZM7.6 16.1053H11.4V13.2632H7.6V16.1053ZM17.1 16.1053V13.2632H13.3V16.1053H17.1ZM17.1 8.52632H13.3V11.3684H17.1V8.52632Z"
        fill="white"
      />
    </svg>
  );
}
