const handleDrink = (age) => {
    if (age < 14) {
        return "drink toddy";
    } else if (age < 18) {
        return "drink coke";
    } else if (age < 21) {
        return "drink beer";
    } else {
        return "drink whisky";
    }
};

const ages = [13, 17, 18, 20, 30, 40];
const whatDoTheyDrink = ages.map(handleDrink);


// ---------------------------------- //

