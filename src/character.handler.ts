import { Character } from './character.interface';
import { Utils } from './utils.js';

const utils = new Utils();

export class CharacterHandler {

    

    character : Character = {
        id : 0,
        name : "",
        status : "",
        species : "",
        type : "",
        gender : "",
        location : "", // Just the name
        image : ""
    }

    characterStatusElement = document.getElementById('status')!;
    characterImgElement = document.querySelector<HTMLImageElement>('.character-img')!;
    characterNameElement = document.querySelector<HTMLSpanElement>('.name')!;
    characterSpecieElement = document.querySelector<HTMLSpanElement>('.specie')!;
    characterGenderElement = document.querySelector<HTMLSpanElement>('.gender')!;
    characterLocationElement = document.querySelector<HTMLSpanElement>('.location')!;

    getRandomNumber(numMin: number, numMax: number): number {
        return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    };

    async getCharacter(id?: number): Promise<Character> {

        const randomId = id || this.getRandomNumber(1, 826);
        
        const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
        const data = await response.json();

        let character : Character = {
            id: randomId,
            name : data.name,
            status : data.status,
            species : data.species,
            type : data.type,
            gender : data.gender,
            location : data.origin['name'],
            image : data.image


        } as Character

        return character;
    }

    async renderCharacter(): Promise<void>{

        if(utils.checkInputField()){
            let id = utils.getInputFieldValue();
            if (!utils.checkId(id)){
                id = 5;
            }
            this.character = await this.getCharacter(id);
        } else {
            this.character = await this.getCharacter();
            utils.checkRandom();
        }

        let status = this.character.status;
        document.documentElement.style.setProperty('--status', `var(--${status})`);

        this.characterImgElement.src = this.character.image;
        this.characterNameElement.innerHTML = this.character.name;
        this.characterSpecieElement.innerHTML = this.character.species;
        this.characterGenderElement.innerHTML = this.character.gender;
        this.characterLocationElement.innerHTML = this.character.location;
        
    }

}