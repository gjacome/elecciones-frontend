import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { MessageService } from '../../services/MessageService.service';
import { EleccionesService } from '../../services/elecciones/EleccionesService.service';
import { Dato } from '../../dto/Dato.model';
import { UtilService } from 'src/app/services/UtilService.service';

@Component({
  selector: 'app-cadete',
  templateUrl: './cadete.component.html',
  styleUrls: ['./cadete.component.css']
})
export class CadeteComponent implements OnInit {
  myForm: FormGroup;    
  cadeteConfirmado: boolean;
  votoExistente: boolean;

  constructor(private eleccionesService: EleccionesService, private messageService: MessageService,  
              private utilService: UtilService, private router: Router, public fb: FormBuilder, private toastr: ToastrService) {
    this.cadeteConfirmado = false;
    this.myForm = this.fb.group({
      codigoCadete: [''],      
      apellido: [''],      
      nombre: [''],      
      curso: [''],      
      votacion: [null],  
    });     
    this.encerarFormulario();
  }  
  ngOnInit() {    
  }  
  
  validatarParametroConsulta () {        
    let codigoCadete = this.myForm.get("codigoCadete").value
    console.log("codigoCadete", codigoCadete)
    if (!codigoCadete || codigoCadete === '') {
      this.toastr.warning('El código del cadete es requerido...!', 'Advertencia');
      return false;
    }
    return true;
  }

  encerarFormulario () {
    this.myForm.get("codigoCadete").setValue('');
    this.myForm.get("apellido").setValue('');
    this.myForm.get("nombre").setValue('');
    this.myForm.get("curso").setValue('');
    this.myForm.get("votacion").setValue(null);
    this.cadeteConfirmado = false;
    this.votoExistente = false;
    this.utilService.removeCadete();
  }

  getDato() {    
    try {
      if (this.validatarParametroConsulta()) {
        this.eleccionesService.getDato(this.myForm.get("codigoCadete").value).subscribe(
          (response: Dato) => {
            console.log("reponse", response)
            this.myForm.get("codigoCadete").setValue(response.codigoCadete);
            this.myForm.get("apellido").setValue(response.apellido);
            this.myForm.get("nombre").setValue(response.nombre);
            this.myForm.get("curso").setValue(response.curso);
            this.myForm.get("votacion").setValue(response.votacion);
            this.cadeteConfirmado = true;
            this.votoExistente = (response.votacion !== null);
            if (this.votoExistente) {
              this.toastr.info("El cadete ya ha votado", "Información") 
            }
            this.utilService.setCadete(response);
          },
          (error: string) => {
            this.encerarFormulario();
            this.toastr.error(this.messageService.getErrorMessage(error), 'Error') 
          }
        );
      }
    } catch (error) {
      this.encerarFormulario();
      this.toastr.error(error.message, 'Error');
    }    
  }

  navegarListas() {
    if (this.utilService.isAutenticado() && !this.votoExistente) {
      this.router.navigate(['voto']);
    }    
  } 
}
