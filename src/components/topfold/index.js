import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./topfold.css";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";
const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="topfold-container">
      <div className="topfold">
        {window.location.pathname === "/" ? (
          <div className="home-topfold">
            <div className="searchbar">
              <i class="fi-rr-search"></i>
              <input
                placeholder="Search for expenses"
                value={query}
                onChange={(e) => handleQuery(e)}
              />
            </div>
            <Link className="linkItem" to="/add-expense">
              <div className="add-button">
                <i class="fi-rr-add"></i>
                <label>Add</label>
              </div>
            </Link>
          </div>
        ) : (
          <div className="add-topfold">
            <Link to="/" className="linkItem">
              <div className="add-topfold-button">
                <i class="fi-rr-angle-left"></i>
                <label>Back</label>
              </div>
            </Link>
            <Link to="/" className="linkItem">
              <div className="add-topfold-button">
                <i class="fi-rr-cross-circle"></i>
                <label>Cancel</label>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopFold;
