import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Material components
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatSliderModule, MatSelectModule, MatCard, MatCardModule, MatToolbarModule, MatMenuModule, MatButtonModule, 
          MatPaginatorModule, MatExpansionModule, MatIconModule, MatSnackBar, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, 
          MatAutocompleteModule, MatTabsModule, MatGridListModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MomentModule } from 'angular2-moment';
import {MatRadioModule} from '@angular/material'
import { HttpErrorInterceptor } from './interceptor/HttpErrorInterceptor';
import { MessageService } from './services/MessageService.service';
import { DatePipe } from '@angular/common';
import { EleccionesService } from './services/elecciones/EleccionesService.service';
import { LoginGuardian } from './services/LoginGuardian.service';
import { CadeteComponent } from './componentes/cadete/cadete.component';
import { VotoComponent } from './componentes/voto/voto.component';
import { UtilService } from './services/UtilService.service';

@NgModule({
  declarations: [       
    CadeteComponent,
    VotoComponent,
    ErrorComponent,
    AppComponent   

  ],
  entryComponents: [
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatIconModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    NgIdleKeepaliveModule.forRoot(),
    MomentModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    MatGridListModule
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi:true,
    },            
    EleccionesService,
    UtilService,
    MessageService, 
    LoginGuardian   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
