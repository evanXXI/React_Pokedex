import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LittleWrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex-grow-1">{children}</div>
    </>
  );
};

export default LittleWrapper;
