import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
 

logar( usuarioLogin : UsuarioLogin): Observable<UsuarioLogin>   {
  return this.http.post<UsuarioLogin>('https://blogpessoalblenda.herokuapp.com/usuarios/logar' , usuarioLogin)

}


cadastrar( usuario: Usuario):Observable<Usuario> {
  return this.http.post<Usuario>('https://blogpessoalblenda.herokuapp.com/usuarios/cadastrar' , usuario)

}

logado(){
let ok: boolean = false

if (environment.token != ''){
     ok=true
}
return ok;

}




}
// : --> a classe em maiúscula define o tipo do objeto. O observable é pra conferir se o objeto tem todos os requisitos preenchidos e não mandar requisição pro back-end à toa. No post, colocamos <Usuario> para indicar que é o objeto observável