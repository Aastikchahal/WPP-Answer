

function removeCharacter(str , position) {
    const part1 = str.substring(0, position);
    const part2 = str.substring(position+1, str.length);

    return part1 + part2;
}

const result = removeCharacter("aastik",4);

console.log(result);

