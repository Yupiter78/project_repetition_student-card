export const getAge = ({ year }) => {
    const age = (new Date().getFullYear() - year).toString();
    // const exceptions = ["2", "3", "4"];
    // function getWord(age) {
    //     if (age.slice(-1) === "1" && age.substr(-2, 2) !== "11") {
    //         return "год";
    //     } else if (
    //         exceptions.includes(age.slice(-1)) &&
    //         age.substr(-2, 1) !== "1"
    //     ) {
    //         return "года";
    //     } else {
    //         return "лет";
    //     }
    // }
    console.log("age:", age);
    function getWord(age) {
        const cases = [2, 0, 1, 1, 1, 2];
        const options = ["год", "года", "лет"];

        console.log("age.substr(-2):", age.substr(-2));

        return options[
            age.substr(-2) > 4 && age.substr(-2) < 20
                ? 2
                : cases[age.substr(-1) < 5 ? age.substr(-1) : 5]
        ];
    }
    return `${age} ${getWord(age)}`;
};

// const calculateAge = (year) => {
//     return new Date().getFullYear() - Number(year);
// };
//
// function plural(number, titles) {
//     const cases = [2, 0, 1, 1, 1, 2];
//     return titles[
//         number % 100 > 4 && number % 100 < 20
//             ? 2
//             : cases[number % 10 < 5 ? number % 10 : 5]
//         ];
// }
