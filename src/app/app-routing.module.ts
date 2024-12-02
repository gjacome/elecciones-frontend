import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadeteComponent } from './componentes/cadete/cadete.component';
import { ErrorComponent } from './error/error.component';
import { LoginGuardian } from './services/LoginGuardian.service';
import { VotoComponent } from './componentes/voto/voto.component';

const routes: Routes = [
  { path: '', component: CadeteComponent, canActivate: [LoginGuardian] },
  { path: 'cadete', component: CadeteComponent },
  { path: 'voto', component: VotoComponent, canActivate: [LoginGuardian] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
