import React from "react";

type ButtonProps = {
  text: string;
  className?: string;
  // handleClick: () => void;
};

function Button(props: ButtonProps) {
  const { text, className } = props;
  return (
    <button
      className={`rounded-full bg-primary px-5 py-2 text-sm font-light shadow-lg shadow-primary/50 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
