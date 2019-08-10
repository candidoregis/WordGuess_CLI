var Letter = function (character) {
    this.character = character;
    this.guessed = false;

    this.checkLetter = function (character) {
        if (character==this.character) {
            this.guessed = true;
        } else {
            this.guessed = false;
        }
    };

    this.displayCharacter = function () {
        if (this.guessed==true) {
            return this.character;
        } else {
            return "_";
        }
    };
}

module.exports = Letter;