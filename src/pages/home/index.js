import React from "react";
import ExpenseList from "../../components/expense-list";
import Topfold from "../../components/topfold";

const Home = () => {
  return (
    <div className="home">
      <Topfold />
      <ExpenseList />
    </div>
  );
};

export default Home;
