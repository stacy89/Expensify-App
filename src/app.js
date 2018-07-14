import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisiableExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill" }));
store.dispatch(addExpense({ description: "Gas Bill" }));

// store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("water"));

const state = store.getState();
const visiableExpenses = getVisiableExpenses(state.expenses, state.filters);
console.log(visiableExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));

