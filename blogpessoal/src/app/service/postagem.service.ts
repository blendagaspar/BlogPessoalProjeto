import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

token={
  headers:new HttpHeaders().set('Authorization',environment.token)
}

getAllPostagens(): Observable<Postagem[]>{
  return this.http.get<Postagem[]>('https://blogpessoalblenda.herokuapp.com/postagem')
}

getByIdPostagem(id: number): Observable<Postagem>{
  return this.http.get<Postagem>(`https://blogpessoalblenda.herokuapp.com/postagem/${id}`)
}

deletePostagem(id: number){
  return this.http.delete(`https://blogpessoalblenda.herokuapp.com/postagem/${id}`)
}




postPostagem(postagem: Postagem) : Observable<Postagem>{
  return this.http.post<Postagem>('https://blogpessoalblenda.herokuapp.com/postagem', postagem)
}


putPostagem(postagem: Postagem): Observable<Postagem>{
  return this.http.put<Postagem>('https://blogpessoalblenda.herokuapp.com/postagem', postagem )
}



}