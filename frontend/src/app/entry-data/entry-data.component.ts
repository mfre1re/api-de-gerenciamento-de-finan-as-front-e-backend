import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrl: './entry-data.component.scss'
})
export class EntryDataComponent {
  email: string = '';
  password: string = '';
  username: string = '';

  constructor(private httpClient: HttpClient) {}
  
  cadastrarUsuario() {
    if(this.email && this.password && this.username) {
      const usuario = {
        email: this.email,
        password: this.password,
        username: this.username
      };   

  this.httpClient.post('http://localhost:8080/usuario', usuario).subscribe(
    (response: any) => {
      this.email = '';
      this.password = '';
      this.username = '';
      alert("Cadastro realizado com sucesso!")
      console.log(response);
    },
    (error: any) => {
      console.error(error);
      }
    );
  } else{
    alert(`Todos os campos precisam ser preenchidos!`);    
  }
  }
}
