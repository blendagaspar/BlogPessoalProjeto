import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
postagem: Postagem= new Postagem()
listaPostagens: Postagem[]


tema:Tema = new Tema()
listaTemas: Tema[]
idTema: number
usuario: Usuario = new Usuario()

idUsuario = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaservice: TemaService,
    private authService: AuthService,
  ) { }

  ngOnInit() {

    if(environment.token==''){
      alert('sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/login'])
    }
this.getAllTemas()
this.getAllPostagens()


  }

getAllTemas(){
  this.temaservice.getAllTema().subscribe((resp: Tema[])=> {
    this.listaTemas = resp
  })
}

findByIdTema(){
this.temaservice.getByIdTema(this.idTema).subscribe((resp:Tema) =>{
  this.tema= resp
})
}

getAllPostagens(){
  this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
    this.listaPostagens = resp
  })
}

findByIdUsuario(){
  this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario)=>{
    this.usuario = resp
  })
}





publicar(){
this.tema.id=this.idTema         //add usuario ao tema
this.postagem.tema=this.tema     // add ao tam
this.usuario.id=this.idUsuario     //add usuario vinculado a postagem
this.postagem.usuario=this.usuario  //add usuario vinculado a postagem

this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
  this.postagem =  resp
  alert('Postagem realizada com sucesso!')
  this.postagem=new Postagem()   //limpar o campo de postagens sempre que uma postagem foi feita
  this.getAllPostagens()        //exibir a postagem assim que for publicada

})
}






}
