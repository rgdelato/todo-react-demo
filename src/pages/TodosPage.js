import React from "react";
import styled from "styled-classnames";
import Header from "../components/Header";
import Todos from "../components/Todos";
import Footer from "../components/Footer";

const sectionClass = styled`
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
              0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const TodosPage = () => {
  return (
    <div>
      <section className={sectionClass}>
        <Header>todos</Header>
        <Todos />
      </section>
      <Footer />
    </div>
  );
};

export default TodosPage;
