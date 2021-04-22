import { ReactNode } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Container = ({ children, className, ...props }: ContainerProps) => (
  <div
    className={`container mx-auto px-4 max-w-screen-xl ${className ?? ""}`}
    {...props}
  >
    {children}
  </div>
);

export default Container;
