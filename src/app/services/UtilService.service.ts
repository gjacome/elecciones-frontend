import { Injectable } from "@angular/core";
import { Dato } from "../dto/Dato.model";

@Injectable()
export class UtilService {    
    constructor() {        
    }
    
    setCadete(cadete: Dato){
        localStorage.setItem('cadete', JSON.stringify(cadete));
    }

    getCadete(){
        try {
            return JSON.parse(localStorage.getItem("cadete"));    
        } catch (error) {
            return null
        }        
    }   

    removeCadete(){
        localStorage.removeItem ('cadete');
    }

    isAutenticado(){
        let cadete :Dato = this.getCadete();
        if(cadete !== null){
            return true;
        }else{
            return false;
        }
    }
}