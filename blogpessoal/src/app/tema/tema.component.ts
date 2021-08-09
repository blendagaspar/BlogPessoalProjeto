import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
tema: Tema= new Tema()
listaTemas: Tema[]


  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit()  {
    if(environment.token==''){
      alert('sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/login'])
    }

    this.findAllTemas()                                             //sempre que iniciar a pagina tema os temas ja cadastrados aparecem
  }

findAllTemas(){                                                           //metodo para listar os temas 
  this.temaService.getAllTema().subscribe((resp: Tema[] )=>{
  this.listaTemas=resp

  })
}


cadastrar(){
this.temaService.postTema(this.tema).subscribe((resp:Tema)=> {            //metodo para cadastrar os temas(post)       
  this.tema = resp
  alert('Parabéns,o seu tema foi cadastrado com sucesso!')
  this.findAllTemas()                                                  //mostrar o tema cadastrado assim que apertar o botão cadastar
  this.tema=new Tema()                                                 //sempre que acabar de cadastrar, vai zerar o campo do tema
})


}
}
