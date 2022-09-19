import React from "react";
import TopFold from "../../components/topfold";
import AddForm from "../../components/add-form";

import "./add-expense.css";
const AddExpense = () => {
  return (
    <div className="add-expense">
      <TopFold />
      <AddForm />
    </div>
  );
};

export default AddExpense;
