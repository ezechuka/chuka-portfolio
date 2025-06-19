import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  size,
  rotation,
  children,
  className,
  orbitDuration,
  spinDuration,
  ...otherProps
}: HTMLAttributes<HTMLDivElement> & {
  size: number;
  rotation: number;
  orbitDuration?: string;
  spinDuration?: string;
}) => {
  return (
    <div
      className={twMerge(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        className,
      )}
      {...otherProps}
    >
      <div
        className="animate-spin"
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <div
            className="animate-spin"
            style={{
              animationDuration: spinDuration,
            }}
          >
            <div
              style={{
                transform: `rotate(${-rotation}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
