import { clsx } from "clsx";


const SliderNav = ({ onPrev, onNext, canGoPrev, canGoNext }) => {
  return (
    <div className={"space-x-2"}>
      <button
        onClick={onPrev}
        className={clsx(
          "transition-all duration-300",
          canGoPrev ? "opacity-100" : "opacity-20 cursor-not-allowed"
        )}
      >
        <svg
          width="37"
          height="36"
          viewBox="0 0 37 36"
          fill="none"
          className={"transform rotate-180"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="0.5"
            width="35"
            height="35"
            rx="17.5"
            stroke="#222222"
          />
          <path d="M16.5 14L20.5 18L16.5 21.7461" stroke="#222222" />
        </svg>
      </button>
      <button
        onClick={onNext}
        className={clsx(
          "transition-all duration-300",
          canGoNext ? "opacity-100" : "opacity-20 cursor-not-allowed"
        )}
      >
        <svg
          width="37"
          height="36"
          viewBox="0 0 37 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="0.5"
            width="35"
            height="35"
            rx="17.5"
            stroke="#222222"
          />
          <path d="M16.5 14L20.5 18L16.5 21.7461" stroke="#222222" />
        </svg>
      </button>
    </div>
  );
};

export default SliderNav;
