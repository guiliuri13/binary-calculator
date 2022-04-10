// Perform binary subtraction

const lessThan = (minuend_root, subtracting_root) => {
    let minuend = minuend_root.split('').reverse().map((num) => {return Number(num)});
    let subtracting = subtracting_root.split('').reverse().map((num) => {return Number(num)});

    // writes zeros to make the smallest number the same length
    if (minuend.length > subtracting.length) {
        let diff = minuend.length - subtracting.length;
        for (let i = 0; i < diff; i++) {
            subtracting.unshift(0);
        }
    } else if (minuend.length < subtracting.length) {
        for (let i = 0; i < subtracting.length - minuend.length; i++) {
            minuend.unshift(0);
        }
    }

    console.log(minuend, subtracting);

    let result = []

    for (let [index_minuend, num_minuend] of minuend.entries()) {
        switch (num_minuend) {
            case num_minuend > subtracting[index_minuend]:
                result.push(num_minuend - subtracting[index_minuend])
                console.log(result)
                break;
        
            case num_minuend < subtracting[index_minuend]:
                //find the closest 1 with index > index_minuend
                
                console.log(result)
                break;
            default:
                result.push(0)
                console.log(result)
                break;
        }
    }

    return result.reverse().join('');
}

console.log(lessThan('11010001', '1011'));