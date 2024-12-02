import { DatePipe } from "@angular/common";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Dato } from "src/app/dto/Dato.model";
import { WebConfig } from "src/app/WebService.config";

@Injectable()
export class EleccionesService {    
    private requestURL: string    
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private httpClient: HttpClient, public datepipe: DatePipe) {        
        this.requestURL = WebConfig.url + "/datos";        
    }
    

    getDato(codigoCadete: string): Observable<Dato> {        
        let parametros = new HttpParams();
        parametros = parametros.append('codigoCadete', codigoCadete);

        let httpOptions = {
            header: this.headers,
            params: parametros          
        };                    
        return this.httpClient.get<Dato>(this.requestURL, httpOptions);
    }    

    updateVotacion(codigoCadete: string, votacion: string): Observable<any> {                    
        let parametros = new HttpParams();
        parametros = parametros.append('codigoCadete', codigoCadete);
        parametros = parametros.append('votacion', votacion);

        let httpOptions = {
            header: this.headers,
            params: parametros          
        };                    
        return this.httpClient.patch<any>(this.requestURL, null, httpOptions);
    }    

}