import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <section className="container px-5">{children}</section>
    </>
  );
};

export default Container;
