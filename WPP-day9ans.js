
function closestHundread(num1,num2) {

 if(num1 != num2) {
    let x = Math.abs(num1-100);

    let y = Math.abs(num2-100);

    if (x < y) {
        return num1;

    } else if(y < x) {
        return num2;
    } else {
        return 0;
    }
 }
 else {
    return false;
 }

}

let result = closestHundread(98, 95);
console.log(result);