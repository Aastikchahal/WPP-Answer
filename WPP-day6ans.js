
function checkMultiple(num) {
    if(num % 3 == 0 || num % 7 == 0) {
        return true;  
    }

    else {
        return false;
    }
}

const result = checkMultiple(21);

console.log(result);