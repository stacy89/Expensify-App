import { createStore } from "redux";

const add = ({a, b}, c) => {
    return a + b + c;
};
console.log(add({a: 1, b:12}, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
   type: "INCREMENT",
   incrementBy
});

const decrementByCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({ count }) => ({
    type: "SET",
    count
});

const resetCount = () => ({
    type: "RESET"
});

const countReducer = (state = { count:0 }, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "SET":
            return {
                count: action.count    
            };    
        case "RESET":
            return {
                count: 0
            };
        default:
            return state;   
    }
};   

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementByCount());

store.dispatch(decrementByCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));


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
