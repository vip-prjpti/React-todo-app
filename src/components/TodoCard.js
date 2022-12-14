import React from "react";
import { useNavigate } from "react-router-dom";

const TodoCard = (props) => {
  const { todo } = props;
  const { id, title, completed } = todo;
  let navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "grey",
        margin: "10px",
        padding: "12px",
        width: " 200px",
      }}
      onClick={() => navigate(`/todo/${id}`)}
    >
      <h4> {title} </h4>
      <h6> {`Completed: ${completed}`} </h6>
    </div>
  );
};

export default TodoCard;
