import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { MessageService } from '../../services/MessageService.service';
import { EleccionesService } from '../../services/elecciones/EleccionesService.service';
import { Dato } from '../../dto/Dato.model';
import { UtilService } from 'src/app/services/UtilService.service';

@Component({
  selector: 'app-voto',
  templateUrl: './voto.component.html',
  styleUrls: ['./voto.component.css']
})
export class VotoComponent implements OnInit {
  opcionSeleccionada: string  = null;
  private cadete: Dato;

  constructor(private eleccionesService: EleccionesService, private messageService: MessageService, private utilService: UtilService,
              private router: Router, public fb: FormBuilder, private toastr: ToastrService) {
    this.opcionSeleccionada = null;  
    this.cadete = this.utilService.getCadete(); 
  }  
  ngOnInit() {    
  }  
  
  setOpcionSeleccionada(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  obtenerClase (opcion: string) {
    return (this.opcionSeleccionada === opcion) ? "lista-seleccionada": "lista";
  }
  

  validarRequerido () {
    if (this.opcionSeleccionada === null) {
      this.toastr.warning('Debe ingresar su voto...!', 'Error');
      return false;
    }

    if (this.cadete === null) {
      this.toastr.error('No se pudo recuperar la información del cadete...!', 'Error');
      return false;
    }
    return true;
  }

  finalizar () {    
    this.opcionSeleccionada = null;   
    this.utilService.removeCadete();
    this.router.navigate(['cadete']);
  }

  votar() {    
    try {
      if (this.validarRequerido()) {
        this.eleccionesService.updateVotacion(this.cadete.codigoCadete, this.opcionSeleccionada).subscribe(
          (reponse: any) => {            
            this.toastr.info("El voto ha sido guardado exitosamente", "Información")
            this.finalizar();

          },
          (error: string) => {            
            this.toastr.error(this.messageService.getErrorMessage(error), 'Error') 
          }
        );
      }
    } catch (error) {      
      this.toastr.error(error.message, 'Error');
    }
  }
  
}
