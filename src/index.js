module.exports = function reverse(x) {
    if (x < 0)
    return Number((x * -1).toString().split("").reverse().join("")); // тут я возвращаю число х умноженное на -1 что дает мне переводить отрицательные числа в положительные и наоборот,
    return Number(x.toString().split("").reverse().join(""));
};
// function reverse(s){
//     return s.split("").reverse().join("");
// } https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript
