import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <button className="expense-edit_button" type="button" onClick={props.onCancel}></button>
          <button className="expense-edit_button" type="button" onClick={props.onCancel}></button>
          <div className="expense-item__price">£{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
