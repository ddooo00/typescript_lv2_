import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const TodoDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);
  const todo = todos.find((item) => item.id === id);

  return (
    <BoxContainer>
      <DetailBox>
        <div>
          ID:{id}
          <BackButton
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </BackButton>
        </div>
        <h1>{todo.title}</h1>
        <p>{todo.contents}</p>
      </DetailBox>
    </BoxContainer>
  );
};

//css
const BackButton = styled.button`
  margin-left: 150px;
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  border-color: rgb(238, 238, 238);
  cursor: pointer;
  height: 40px;
  width: 120px;
`;

const DetailBox = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  padding: 20px;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export default TodoDetail;
