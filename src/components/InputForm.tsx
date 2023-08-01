import React from "react";
import { useState } from "react";
import uuid from "react-uuid";
import { addTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";

// input 기능 구현
function InputForm() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      title,
      contents,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContents("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="내용을 입력하세요."
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        />
        <button
          style={{
            cursor: "pointer",
          }}
        >
          입력
        </button>
      </form>
    </div>
  );
}

export default InputForm;
