import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  postagem: Postagem = new Postagem

  constructor(private postagemSeverce: PostagemService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id:number){
    this.postagemSeverce.getByIdPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem = resp
    })
  }

salvar (){
  this.postagemSeverce.putPostagem(this.postagem).subscribe((resp: Postagem)=>{
    this.postagem = resp
    this.router.navigate(['/feed'])
    location.assign('/feed')
  })
}

}
