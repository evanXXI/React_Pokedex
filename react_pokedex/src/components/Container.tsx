import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <section className="container-lg text-light d-flex flex-column mx-5">
        {children}
      </section>
    </>
  );
};

export default Container;
