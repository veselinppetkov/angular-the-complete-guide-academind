// type Person = {
//     name: string,
//     age: number
// };
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// let person: Person
// person = {
//     name: "Vesko",
//     age: 24
// }
// console.log(person)
// // Functions
// function sum (a: number, b:number): number | string {
//     return a+b
// }
// Generics
function insertInFront(arr, value) {
    var newArr = __spreadArray([value], arr, true);
    return newArr;
}
console.log(insertInFront([1, 2, 3, 4], 5));
