const listNums = [1, 10, 2, 6, 5, 3];


function highestProduct(list) {
    let outputList = [];
    let newList = list;
    // loop through all numbers
    for(i=0; i<newList.length; i++) {

        // find the current new high number
        let highestNum = Math.max(...list);

        // make sure there are only 3 numbers in the outputList
        if (outputList.length <= 2) {
            outputList.push(highestNum);
        }
        
        //remove the current highest number
        let highestNumIndex = newList.indexOf(highestNum);
        newList.splice(highestNumIndex, 1)
    }
    // return the product of the outputList and control values
    console.log(outputList[0] * outputList[1] * outputList[2]);
    console.log(`Highest numbers are: ${outputList[0]}, ${outputList[1]}, ${outputList[2]}`)
}

highestProduct(listNums);


