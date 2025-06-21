import clsx from "clsx";
import React from "react";

type AlignType = "start" | "center" | "end";

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
  alignX?: AlignType;
  alignY?: AlignType;
};

const getJustifyClass = (align: AlignType = "start") => {
  return align === "center" ? "justify-center" : align === "end" ? "justify-end" : "justify-start";
};

const getItemsClass = (align: AlignType = "start") => {
  return align === "center" ? "items-center" : align === "end" ? "items-end" : "items-start";
};

const Container: React.FC<ContainerProps> = ({ className, children, alignX = "start", alignY = "start" }) => {
  return (
    <div
      className={clsx(
        "flex w-full h-full", // Ensure full width & height
        getJustifyClass(alignX),
        getItemsClass(alignY),
        className
      )}
    >
      <div>{children}</div>
    </div>
  );
};

export { Container };
