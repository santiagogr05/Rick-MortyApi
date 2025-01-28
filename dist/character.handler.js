var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Utils } from './utils.js';
const utils = new Utils();
export class CharacterHandler {
    constructor() {
        this.character = {
            id: 0,
            name: "",
            status: "",
            species: "",
            type: "",
            gender: "",
            location: "", // Just the name
            image: ""
        };
        this.characterStatusElement = document.getElementById('status');
        this.characterImgElement = document.querySelector('.character-img');
        this.characterNameElement = document.querySelector('.name');
        this.characterSpecieElement = document.querySelector('.specie');
        this.characterGenderElement = document.querySelector('.gender');
        this.characterLocationElement = document.querySelector('.location');
    }
    getRandomNumber(numMin, numMax) {
        return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    }
    ;
    getCharacter(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const randomId = id || this.getRandomNumber(1, 826);
            const response = yield fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
            const data = yield response.json();
            let character = {
                id: randomId,
                name: data.name,
                status: data.status,
                species: data.species,
                type: data.type,
                gender: data.gender,
                location: data.origin['name'],
                image: data.image
            };
            return character;
        });
    }
    renderCharacter() {
        return __awaiter(this, void 0, void 0, function* () {
            if (utils.checkInputField()) {
                let id = utils.getInputFieldValue();
                if (!utils.checkId(id)) {
                    id = 5;
                }
                this.character = yield this.getCharacter(id);
            }
            else {
                this.character = yield this.getCharacter();
                utils.checkRandom();
            }
            let status = this.character.status;
            document.documentElement.style.setProperty('--status', `var(--${status})`);
            this.characterImgElement.src = this.character.image;
            this.characterNameElement.innerHTML = this.character.name;
            this.characterSpecieElement.innerHTML = this.character.species;
            this.characterGenderElement.innerHTML = this.character.gender;
            this.characterLocationElement.innerHTML = this.character.location;
        });
    }
}
