import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent  implements OnInit  {
  
  constructor(private settingsService: SettingsService) { 
  }

  ngOnInit(){
    // no lo veo tan necesario, de todos modos hace lo que tiene que hacer
    // ----------
    
    // this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme:string){

    this.settingsService.changeTheme(theme);

  }

  
}
