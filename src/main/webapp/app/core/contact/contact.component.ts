import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'jhi-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  toto = 2;

  formData: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.toto = 5;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formData = this.formbuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      commentaire: ['', [Validators.required]],
    });
  }

  onSubmit(value: any): void {
    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
  }

  get nom(): AbstractControl | null {
    return this.formData.get('nom');
  }

  get prenom(): AbstractControl | null {
    return this.formData.get('prenom');
  }

  get telephone(): AbstractControl | null {
    return this.formData.get('telephone');
  }

  get email(): AbstractControl | null {
    return this.formData.get('email');
  }

  get commentaire(): AbstractControl | null {
    return this.formData.get('commentaire');
  }
}
