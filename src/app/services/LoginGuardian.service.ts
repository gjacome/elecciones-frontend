import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UtilService } from './UtilService.service';
@Injectable()
export class LoginGuardian implements CanActivate{
    constructor(private router:Router, private utilService: UtilService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let isAutenticado = this.utilService.isAutenticado();
        
        console.log("canActivate::route.url", route.pathFromRoot);
        console.log("canActivate::state.url", state.url);        
        console.log("canActivate::isAutenticado",isAutenticado);        
        
        if(isAutenticado){
            return true;                  
        }else{
            this.router.navigate(['cadete']);
            return false;
        }
    }

}