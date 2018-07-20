import moment from "moment";

export default [{
    id: "1",
    description: "Gum",
    note: "",
    amount: 250,
    createdAt: 0
}, 
{
    id: "2",
    description: "Candy",
    note: "",
    amount: 200,
    createdAt: moment(0).subtract(4, "days").valueOf()
}, 
{
    id: "3",
    description: "Chocolate",
    note: "",
    amount: 500,
    createdAt:  moment(0).add(4, "days").valueOf()
}];