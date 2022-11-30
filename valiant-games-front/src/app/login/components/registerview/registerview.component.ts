import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-registerview',
	templateUrl: './registerview.component.html',
	styleUrls: ['./registerview.component.css'],
})
export class RegisterviewComponent {
	images: string[] = [
		'https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		'https://images.unsplash.com/photo-1542549237432-a176cb9d5e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=707&q=80',
		'https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80',
		'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
		'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		'https://images.unsplash.com/photo-1572537577590-ac6a88150100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		'https://images.unsplash.com/photo-1631896928992-90e5a2cc7a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	];
	chosenImage: string = this.images[0];

	registerForm: FormGroup;

	constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
		setInterval(() => {
			this.chosenImage = this.images[Math.floor(Math.random() * this.images.length)];
		}, 5000);
	}

	ngOnInit(): void {
		this.registerForm = this.fb.group({
			email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
			firstName: ['', [Validators.required, Validators.minLength(3)]],
			lastName: ['', [Validators.required, Validators.minLength(3)]],
			phone: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]*$')]],
			password: ['', [Validators.required, Validators.minLength(3)]],
			confirmPassword: ['', [Validators.required, Validators.minLength(3), matchValidator('password')]],
		});
	}

	submit() {
		console.log(this.registerForm.value);
		if (!this.registerForm.valid) {
			Swal.fire({
				title: 'Oops...',
				text: 'Por favor revisa la información ingresada',
				icon: 'error',
				background: '#1A2F38',
				confirmButtonColor: '#F4A261',
				color: '#FFFFFF',
			});
			return;
		}
		this.authService.register(this.registerForm.value).subscribe(
			(res) => {
				Swal.fire({
					title: 'Registro exitoso',
					text: 'Ahora puedes iniciar sesión',
					icon: 'success',
					background: '#1A2F38',
					confirmButtonColor: '#F4A261',
					color: '#FFFFFF',
					confirmButtonText: 'Iniciar sesión',
				}).then((result) => {
					this.router.navigate(['/login']);
				});
			},
			(err) => {
				Swal.fire({
					title: 'Oops...',
					text: 'Ha ocurrido un error',
					icon: 'error',
					background: '#1A2F38',
					confirmButtonColor: '#F4A261',
					color: '#FFFFFF',
				});
			}
		);
	}
}

function matchValidator(matchTo: string, reverse?: boolean): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		if (control.parent && reverse) {
			const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
			if (c) {
				c.updateValueAndValidity();
			}
			return null;
		}
		return !!control.parent &&
			!!control.parent.value &&
			control.value === (control.parent?.controls as any)[matchTo].value
			? null
			: { matching: true };
	};
}
