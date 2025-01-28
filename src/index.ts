import { CharacterHandler }  from "./character.handler.js" ;
import { Utils } from "./utils.js";

const ch = new CharacterHandler();
const utils = new Utils();

const getCharacterBtn = document.querySelector('.getCharacter');
getCharacterBtn?.addEventListener('click', () => {
    ch.renderCharacter();    
});

utils.inputIdElement.addEventListener('focus', () => {
    utils.emptyInputField();
    utils.uncheckRandom();

});

const checkboxBtn = document.querySelector<HTMLDivElement>('.checkbox')!;
checkboxBtn.addEventListener('click', () => {
    utils.emptyInputField();
});