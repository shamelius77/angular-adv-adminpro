import { Component } from '@angular/core';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component  {

 public labels1:string[] = ['Pan', 'Refrescos', 'Tacos'];
 public data1 = [ 
  [10, 30, 70]
];

public labels4:string[] = ['En tiempo', 'vencidos', 'Por vencer'];
 public data4 = [ 
  [20, 40, 40]
];
  
public colores4:Color[]= [
  { backgroundColor: [ '#1795e3' , '#b30c33', '#f7f68b' ]  }

]

}
