import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="bg-dark h-100 w-100">{children}</div>
    </>
  );
};

export default Wrapper;
