import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ContainerComponent } from './container/container.component';
import { TopHeaderComponent } from "./top-header/top-header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, ContainerComponent, TopHeaderComponent]
})
export class AppComponent {
  title = 'angular-ekart';
}
