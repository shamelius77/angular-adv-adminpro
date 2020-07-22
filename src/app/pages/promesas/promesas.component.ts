import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

      // const promesa = new Promise( (resolve, reject)=>{

      //   if (false){
      //     resolve('hola mundo');
      //   }else{
      //     reject('Error algo salio mal....')
      //   }

      // });

      // promesa.then(result =>{
      //         console.log( result, 'hey termine');
      //       }).catch(err => console.log(err));

      // console.log('fin del ini');

      this.getusuarios().then(usuarios => console.log(usuarios));

  }

  getusuarios(){

   return new Promise((resolve, reject )=>{

      fetch('https://reqres.in/api/users')
          .then( resp => resp.json() )
          .then( body => resolve(body.data) ) ;
      
    })

  }

}
