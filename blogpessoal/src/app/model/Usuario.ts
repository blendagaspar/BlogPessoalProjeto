import { Postagem } from "./Postagem"
export class Usuario{

    public id: number
    public nome: string
    public usuario:string 
    public senha: string
    public foto:string 
    public tipoUsuario:string
    public dataNascimento:Date
    public postagem: Postagem []
}
