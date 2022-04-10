// Perform binary subtraction

const lessThan = (minuend_root, subtracting_root) => {
    let minuend = minuend_root.split('').reverse().map((num) => {return Number(num)});
    let subtracting = subtracting_root.split('').reverse().map((num) => {return Number(num)});

    let result = []
    for (let [index_minuend, num_minuend] of minuend.entries()) {
        // if = to the element of array2 and index1 is equal to index2 and both are 1, result = 0
        if (subtracting[index_minuend] === num_minuend) {
            result.push(0);
        }
        // if it is < that the element of array2 finds the next 1 and passes the index < that it to 1
        else if (num_minuend < subtracting[index_minuend] ) {
            // find the next array element that is > than array2[index1]
            console.log(subtracting)
            for (let [index_subtracting, num_subtracting] of subtracting.entries()) {
                if (num_subtracting = 1) {
                    subtracting[index_subtracting] = 0;
                }else{
                    subtracting[index_subtracting] = 1;
                }
            }
            console.log(subtracting)
            if (subtracting[index_minuend] === num_minuend) {
                result.push(0);
            }
        }else{
            result.push(1);
        }
    }
    // exclude the zeros after the last 1
    return result.reverse().join('');
}

console.log(lessThan('11010001', '1011'));