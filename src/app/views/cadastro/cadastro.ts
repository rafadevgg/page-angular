import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './cadastro.html',
    styleUrls: ['./cadastro.scss'],
})
export class Cadastro {

    nome: string = '';
    dataNascimento: string = '';
    endereco: string = '';
    email: string = '';
    senha: string = '';
    confirmar: string = '';

    constructor(private router: Router) { }

    cadastrar() {
        if (!this.nome.trim() || !this.dataNascimento.trim() || !this.endereco.trim() || !this.email.trim() || !this.senha.trim() || !this.confirmar.trim()) {
            alert('Preencha todos os campos.');
            return;
        }
        if (this.senha !== this.confirmar) {
            alert('Senhas não conferem.');
            return;
        }

        this.router.navigate(['/']);
    }

}
