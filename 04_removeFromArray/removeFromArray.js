// a function get two arguments to remove array element and deal with multiple argument options
const removeFromArray = function(myarray, ...theDeletedElements) {
    const Newitems = [];
    myarray.forEach((item) => {
        if (!theDeletedElements.includes(item)) {
            Newitems.push(item);
          }
    });
        return Newitems;
};
// Do not edit below this line
module.exports = removeFromArray;
