export default function WaveDivider() {
  return (
    <div className="w-full h-[160px] relative overflow-hidden pointer-events-none">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 160V77.7143C0 77.7143 480 160 720 160C960 160 1440 77.7143 1440 77.7143V160H0Z"
          fill="#F9FAFB"
        />
      </svg>
    </div>
  );
}
