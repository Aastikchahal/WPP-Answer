

function upperLower(str) {
    if(str.length < 3) {
        return str.toUpperCase();
    }

    else {
        let front = str.substring(0,3).toLowerCase();
        let back = str.substring(3, str.length);

        return front + back;
    }
    
    
}

const result = upperLower("CHAHAL");

console.log(result);

const result2 = upperLower("ch");

console.log(result2);