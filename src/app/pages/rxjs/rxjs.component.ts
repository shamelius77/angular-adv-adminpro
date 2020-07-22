import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy  {

  public intervalSubs: Subscription

  constructor() { 
    // this.retornaObservable().pipe(
    //     retry(1)
    //   )
    //   .subscribe(
    //   (valor) => { console.log('Subs: ',valor) },     ///  Next
    //   (error) => { console.error(error) },            ///  Error
    //   () => {console.info('Obs complete') }          /// Complete
    // );

    this.intervalSubs =  this.retornaIntervalo().subscribe( 
                            (valor)=>{console.log(valor);})

  }

  ngOnDestroy(): void{
      this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {
  }


  retornaIntervalo(){

      const intervalo$ = interval(500).pipe(
        map( (valor) =>  valor + 1 ),
        filter( valor => ( valor % 2 === 0 ) ? true : false ),
        // take(10),
      );

      return intervalo$ 

  }

  retornaObservable(){
    
      let i = -1;

     return new Observable<number>(( observer )=>{

      const intervalo = setInterval( ()=>{

            i++
            observer.next(i);

            if (i === 4)
            { 
              clearInterval(intervalo);
              observer.complete();
            }

            if (i === 2)
            {
              observer.error('i llego al numero 2')
            }

        }, 500)
      })

  }

}
