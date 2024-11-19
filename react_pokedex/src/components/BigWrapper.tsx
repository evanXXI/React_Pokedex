import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BigWrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">{children}</div>
    </>
  );
};

export default BigWrapper;
