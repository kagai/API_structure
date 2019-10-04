const max = string => {
    const characters = {};

    for (let character of string){
        //console.log('------------character--------------',characters[character]);
        characters[character] = characters[character] + 1 || 1;

      console.log(characters);
    }
    let maxCount = 0;
    let maxCharacter = null;

    for (let character in characters) {
        if (characters[character] > maxCount) {
            maxCount = characters[character];
            maxCharacter = character;
        }
    }

    return maxCharacter;
};

console.log(max('addddddddwxyz'));
