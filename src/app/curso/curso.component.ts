import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
    public rm: string
    public nome: string
    public prof: string
    public bases1: string[]
    public bases2: string[]
    public bases3: string
    public bases4: string
    public bases5: string

    constructor(){
      this.rm = "07931"
      this.nome = "José Felipe Leite Silva"
      this.prof = "Charles Bruno Barros"
      this.bases1 = ["Aplicações Web de página única (SPA)", "Renderização de HTML", "Templates e estilização", 
      "Componentes", "Estados", "Roteamento e navegação", "Eventos", "Formulários", "Validação"]
      this.bases2 = ["Conceitos de CMS - Content Managment System", "Sessão de Usuário/Cookies/Hash de Autenticação"]
      this.bases3 = "Acesso a dados via APIs REST"
      this.bases4 = "Autenticação e autorização"
      this.bases5 = "Testes automatizados"
    }
}
