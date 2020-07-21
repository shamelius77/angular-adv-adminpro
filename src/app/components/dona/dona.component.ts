import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  @Input() title : string = 'Sin titulo';

  @Input('labels') doughnutChartLabels: Label[] = ['label-1', 'label-2', 'label-3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];

 @Input('colors') colores:Color[]= [
    { backgroundColor: [ '#808E0A' , '#0EE1AB', '#640A8E' ] }

  ]

}
