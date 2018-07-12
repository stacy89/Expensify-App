// import { createStore } from "redux";

// const add = ({a, b}, c) => {
//     return a + b + c;
// };
// console.log(add({a: 1, b:12}, 100));

// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//    type: "INCREMENT",
//    incrementBy
// });

// const decrementByCount = ({ decrementBy = 1 } = {}) => ({
//     type: "DECREMENT",
//     decrementBy
// });

// const setCount = ({ count }) => ({
//     type: "SET",
//     count
// });

// const resetCount = () => ({
//     type: "RESET"
// });

// const countReducer = (state = { count:0 }, action) => {
//     switch(action.type) {
//         case "INCREMENT":
//             return {
//                 count: state.count + action.incrementBy
//             };
//         case "DECREMENT":
//             return {
//                 count: state.count - action.decrementBy
//             };
//         case "SET":
//             return {
//                 count: action.count    
//             };    
//         case "RESET":
//             return {
//                 count: 0
//             };
//         default:
//             return state;   
//     }
// };   

// const store = createStore(countReducer);

// store.subscribe(() => {
//     console.log(store.getState());
// });

// store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch(incrementCount());

// store.dispatch(resetCount());

// store.dispatch(decrementByCount());

// store.dispatch(decrementByCount({ decrementBy: 10 }));

// store.dispatch(setCount({ count: 101 }));





// const person = {
//     name: "Stacy",
//     age: 29,
//     location: {
//         city: "Berkeley",
//         temp: 70
//     }
// };

// const {name, age} = person;

// console.log(`${name} is ${age}.`)

// const book = {
//     title: "Ego is th enemy", 
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const {name: publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName);

// const address = ["1234 Channing Way", "Berkeley", "California", "95129"];
// const [, city, state = "Texas"] = address;
// console.log(`You are in ${city}, ${state}`);

// const item = ["coffee(hot)", "$2.00", "$2.50", "$2.75"];
// const [coffee, , med] = item;

// console.log(`A medium ${coffee} costs ${med}.`);




import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const addExpense = (
    { 
        description = "", 
        note = "", 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note, 
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id, 
    updates
});

const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

const setStartDate = (startDate) => ({
    type: "SET_START_DATE", 
    startDate
});

const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state, 
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return  state.filter(({ id }) => id !== action.id); 
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {    
                    return expense;
                }
            });     
        default: 
            return state;
    }
};

const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state, 
                text: action.text
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount" 
            };  
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date" 
            };  
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
        };    
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number " || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters) 
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({ description: "coffee", amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("ffe"));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(999));

const demoState = {
    expenses: [{
        id: "qwert",
        description: "Jan Rent",
        note: "Final payment for that address", 
        amount: 60000,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: "Jen",
//     age: 24
// };

// console.log({
//     age: 29,
//     ...user,
//     location: "California"
// });