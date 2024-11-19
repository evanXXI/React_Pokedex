import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardHolder: React.FC<Props> = ({ children }) => {
  return (
    <>
      <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-4 pb-5">
        {children}
      </section>
    </>
  );
};

export default CardHolder;
