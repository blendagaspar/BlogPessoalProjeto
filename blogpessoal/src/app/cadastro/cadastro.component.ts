import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastrarComponent implements OnInit {
  usuario: Usuario = new Usuario();
  confirmarSenha: string;  //variavel
  tipoUsuario: string;     //variavel

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }



  tipoUser(event: any) {
    this.tipoUsuario = event.target.value;
  }

  cadastrar() {
    this.usuario.tipoUsuario = this.tipoUsuario;

    this.router.navigate(['/login'])

    if (this.usuario.senha != this.confirmarSenha) {
      alert('As senhas não coincidem');
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/logar'])
        alert('Usuário cadastrado com sucesso!');
      });
    }
  }
}