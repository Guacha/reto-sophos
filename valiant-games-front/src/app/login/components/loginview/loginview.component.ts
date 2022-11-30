import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-loginview',
	templateUrl: './loginview.component.html',
	styleUrls: ['./loginview.component.css'],
})
export class LoginviewComponent {
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
	loginForm: FormGroup;

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', Validators.required),
		});
	}

	constructor(private authService: AuthService, private router: Router) {
		setInterval(() => {
			this.chosenImage = this.images[Math.floor(Math.random() * this.images.length)];
		}, 5000);
	}

	submit() {
		if (!this.loginForm.valid) {
			Swal.fire({
				title: 'Oops...',
				text: 'Por favor revisa la información ingresada',
				icon: 'error',
				background: '#1A2F38',
				confirmButtonColor: '#F4A261',
				color: '#FFFFFF',
			});
		}
		const succ: boolean = true;

		this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
			(res) => {
				this.authService.setToken(res.token);
				this.router.navigate(['/']);
			},
			(err) => {
				Swal.fire({
					title: 'Oops...',
					text: 'Usuario o contraseña incorrectos',
					icon: 'error',
					background: '#1A2F38',
					confirmButtonColor: '#F4A261',
					color: '#FFFFFF',
				});
			}
		);
	}
}
