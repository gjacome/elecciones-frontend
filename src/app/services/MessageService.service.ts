import { Injectable } from "@angular/core";

@Injectable()
export class MessageService {   
    getErrorMessage(codeError: string): string {
        let message: string;
        switch(codeError) {
            case "internal_server.error":
                message = "Error inesperado, comuníquese con la Administradora del aplicativo.";
                break;            
            case "votacion.error.not_found":
                message = "El código de cadete ingresado no fue encontrado.";
                break;
                case "votacion.error.save_selection":
                message = "No se pudo registrar el voto.";
                break;
            default:
                message = "Error inesperado, comuníquese con la Administradora del aplicativo.";
        }
        return message;
    }
}