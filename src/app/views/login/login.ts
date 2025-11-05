import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.html',
    styleUrls: ['./login.scss'],
})
export class Login {

    username: string = '';
    password: string = '';

    constructor(private router: Router) { }

    entrar() {
        if (this.username.trim() && this.password.trim()) {
            this.router.navigate(['/']);

        } else {
            alert('Preencha usuário e senha.');
        }
    }

}
