import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
  }

  handleInputChange(event:any) {
    console.log("handleInputChange "+this.theme.current);
    this.switchTheme();
  }
  public switchTheme(): void {
    if (this.theme.current === 'light') {
        this.theme.current = 'dark';
    } else {
        this.theme.current = 'light';
    }
    console.log("current theme "+this.theme.current);
  }

}
