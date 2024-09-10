const addComma = (Number, character = '.') => {
    let newNumber;

    newNumber = Number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, character);

    return newNumber
};

export default addComma;