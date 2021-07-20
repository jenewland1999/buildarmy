import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="relative max-w-screen-xl mx-auto px-4">{children}</div>
  );
};

export default Container;
