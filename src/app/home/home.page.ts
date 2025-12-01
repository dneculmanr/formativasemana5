import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonButton, IonText, IonLabel } from '@ionic/angular/standalone';

import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Persona, Personaservice} from "../services/personaservice";
import {person} from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ReactiveFormsModule, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule,  IonList, IonItem, IonInput, IonButton, IonText, IonLabel ],
})
export class HomePage implements OnInit {
  personaForm: FormGroup;


  isSubmitting = false;

  persona: Persona[] = [];

  mensaje = ''
  errorMsg = ''

  constructor(
    private fb: FormBuilder,
    private personaService: Personaservice
  ) {
    this.personaForm = this.fb.group({
      rut: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: ['', Validators.required],
      correo: ['', Validators.required],
      region: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(){
    this.personaService.listarPersonas().subscribe(
      {
       next: (data) => {
         this.persona = data;
       },
       error: (error) => {
         console.error('Error al cargar personas', error);
       },
      }
    );
  }


  onSubmit(){
   this.mensaje = '';
   this.errorMsg = '';

   if (this.personaForm.invalid){
     this.personaForm.markAllAsTouched();
     this.errorMsg = 'Por favor, complete todos los campos correctamente';
     return;
   }

   this.isSubmitting = true;

   this.personaService.crearPersona(this.personaForm.value).subscribe(
     {
       next: (persona) => {
         console.log('PErsona AGregada!', persona);
         this.mensaje = 'Persona Agregada Exitosamente';
         this.cargarPersona();
         this.isSubmitting = false;
         this.personaForm.reset();
       },
       error: (error) => {
            console.error('Error al Agregar Persona', error);
            this.errorMsg = error.error?.detail || 'Error al Agregar Persona';
            this.isSubmitting = false;
       },
     });

  }



}
