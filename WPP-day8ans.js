
function checkJava(str) {
    if(str.length < 4) {
        return false;
    }

    else {
        output = str.substring(0, 4);

        if(output == "Java") {
            return true;
        } else {
            return false;
        }
    }
}

const result = checkJava("Javascript");

console.log(result);