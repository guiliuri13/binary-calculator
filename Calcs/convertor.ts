// converts a binary number to decimal

const toDecimal = (root_bin) => {
    let bin_splited = root_bin.split('').reverse().map(num => Number(num)),
        temp_total = 0,
        total = 0

    bin_splited.map((number, index) => {
        if (number == 1) {
            let base = Math.pow(2, index)
            temp_total = Number(number) * base
            total = temp_total + total
        }
    })

    return total
}