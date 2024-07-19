
function frontAndBack(string) {
    if(string.length >= 3) {
        output = string.substring(string.length - 3);

        return output + string + output;
    }
     else {
        return false;
     }
}

const result = frontAndBack("aastik");

console.log(result);