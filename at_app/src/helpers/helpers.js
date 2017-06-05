let _getCurrentYear = () => {
    let date = new Date();
    return date.getFullYear();
}

module.exports = {
	_getCurrentYear,
}

// w linijce 2) dodalem () za Date, przy yarn start, mialem komunikat o tym, ze brakuje nawiasów
