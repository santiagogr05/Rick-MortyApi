export class Utils {
    constructor() {
        this.randomCheckboxElement = document.getElementById('random');
        this.inputIdElement = document.querySelector('.inputId');
        // For checking valid ID (Between 1 - 826)
        this.checkId = (id) => {
            return (id > 0 && id < 827);
        };
    }
    checkInputField() {
        if (this.inputIdElement.value == '') {
            return false;
        }
        else {
            return true;
        }
    }
    getInputFieldValue() {
        try {
            let id = parseInt(this.inputIdElement.value);
            return id;
        }
        catch (e) {
            // Return Jerry becasue is so dumb type text when it says in the most explicit manner you have to type a number XD
            return 5;
        }
    }
    checkRandom() {
        this.randomCheckboxElement.checked = true;
    }
    uncheckRandom() {
        this.randomCheckboxElement.checked = false;
    }
    emptyInputField() {
        this.inputIdElement.value = '';
    }
}
