import { Routes } from '@angular/router';
import { PaginaInicial } from './views/pagina-inicial/pagina-inicial';
import { Notfound } from './views/notfound/notfound';
import { Login } from './views/login/login';
import { Cadastro } from './views/cadastro/cadastro';

export const routes: Routes = [

    { path: '', component: PaginaInicial },
    { path: 'login', component: Login },
    { path: 'cadastro', component: Cadastro },
    { path: '**', component: Notfound }

];
