// import { createStore } from "redux";

// const store = createStore((state = { count:0 }, action) => {
//     switch(action.type) {
//         case "INCREMENT":
//             const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
//             return {
//                 count: state.count + incrementBy
//             };
//         case "DECREMENT":
//             const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
//             return {
//                 count: state.count - decrementBy
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
// });    

// store.subscribe(() => {
//     console.log(store.getState());
// });

// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// });

// store.dispatch({
//     type: "INCREMENT"
// });

// store.dispatch({
//     type: "RESET"
// });

// store.dispatch({
//     type: "DECREMENT",
//     decrementBy: 10
// });

// store.dispatch({
//     type: "DECREMENT"
// });

// store.dispatch({
//     type: "SET",
//     count: 101
// });

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

const item = ["coffee(hot)", "$2.00", "$2.50", "$2.75"];
const [coffee, , med] = item;

console.log(`A medium ${coffee} costs ${med}.`);
