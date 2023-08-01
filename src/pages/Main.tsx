import React from "react";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import InputForm from "../components/InputForm";

function Main() {
  return (
    <Container>
      <header
        style={{
          backgroundColor: "#d1ffdd",
          padding: "10px",
        }}
      >
        My TodoList
      </header>
      <main
        style={{
          backgroundColor: "#feffd6",
          padding: "10px",
        }}
      >
        <InputForm />
        <div>
          <TodoList listDone={false} />
          <TodoList listDone={true} />
        </div>
      </main>
      <footer
        style={{
          backgroundColor: "#fae6ff",
          padding: "10px",
        }}
      >
        <p>Typescript - so young. All rights reserved.</p>
      </footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-width: 800px;

  margin: 0 auto;
`;

export default Main;
