const Welcome = ({ className }: { className?: string }) => (
  <h1
    className={`mt-28 text-center text-3xl sm:text-4xl md:mt-36 md:text-left md:text-6xl lg:text-8xl ${className}`}
  >
    Herzlich Willkommen
    <span className="block">
      <span className="bg-cyan-600 px-2 text-base text-base text-white sm:text-lg md:text-2xl lg:text-4xl ">
        in der Augenarztpraxis im Zentrum
      </span>
    </span>
  </h1>
);

export default Welcome;
