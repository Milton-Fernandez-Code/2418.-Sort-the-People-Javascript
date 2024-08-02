/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let newObj = []
    let sortedArray = [];
   
    for(let i = 0; i < names.length; i++) {
        let obj = {name: names[i], height: heights[i]}
        newObj.push(obj)
    }

    newObj.sort((a, b) => b.height - a.height)

   for (let i = 0; i < newObj.length; i++) {
    sortedArray.push(newObj[i].name)
   }

    return sortedArray;
};
