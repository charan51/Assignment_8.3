function printTimesTable(number) {
    var init = 1;
    while(init <=10) {
        const multiCalResult = number * init; 
        console.log(`${number} * ${init} = ${multiCalResult}`);
        init++;
    }
}
printTimesTable(5);