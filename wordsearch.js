const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l = 0; l < horizontalJoin.length; l++) {
        //console.log('siendfeld', horizontalJoin[l]);
        if (horizontalJoin[l].includes(word)) {
            return true;
        } else {
            for (let i = 0; i < horizontalJoin[l].length; i++) {
                let arr = [];
                for (let x = 0; x < horizontalJoin.length; x++) {
                    arr.push(horizontalJoin[x][i]);
                }
                if (arr.join('').includes(word)) {
                    return true;
                }
            }
        }
    }
    return false;
};

module.exports = wordSearch;