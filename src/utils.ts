

export class Utils {

    randomCheckboxElement = document.getElementById('random') as HTMLInputElement;
    inputIdElement = document.querySelector<HTMLInputElement>('.inputId')!;

    // For checking valid ID (Between 1 - 826)
    checkId = (id: number) => {
        return (id > 0 && id < 827)
    }

    checkInputField(): boolean {
        if (this.inputIdElement.value == ''){
            return false;
        } else {
            return true;
        }
    }

    getInputFieldValue(): number {

        try{
            let id = parseInt(this.inputIdElement.value);
            return id;
        } catch (e) {
            // Return Jerry becasue is so dumb type text when it says in the most explicit manner you have to type a number XD
            return 5; 
        }
    }

    checkRandom(): void {        
        this.randomCheckboxElement.checked = true;
    }
   uncheckRandom(): void {        
        this.randomCheckboxElement.checked = false;
    }

    emptyInputField(): void{
        this.inputIdElement.value = '';
    }

}