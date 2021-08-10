import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

token={
  headers:new HttpHeaders().set('Authorization',environment.token)
}

getAllTema(): Observable<Tema[]>{
  return this.http.get<Tema[]>('https://blogpessoalblenda.herokuapp.com/tema')
}


getByIdTema(id:number): Observable<Tema>{

  return this.http.get<Tema>( `https://blogpessoalblenda.herokuapp.com/tema/${id}`) //add  craze para funcionar em vez de aspas ``
}



postTema(tema: Tema): Observable<Tema>{
  return this.http.post<Tema>('https://blogpessoalblenda.herokuapp.com/tema', tema)
}


putTema(tema: Tema): Observable<Tema>{
  return this.http.put<Tema>('https://blogpessoalblenda.herokuapp.com/tema', tema)
}

deleteTema(id: number){

  return this.http.delete(`https://blogpessoalblenda.herokuapp.com/tema/${id}`) //add  craze para funcionar em vez de aspas ``

}



}
