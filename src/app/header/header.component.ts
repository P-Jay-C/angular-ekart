import { Component, isStandalone } from "@angular/core";
import { MainMenuComponent } from "./main-menu/main-menu.component";

@Component({
    selector: 'app-header',
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
    standalone: true,
    imports: [MainMenuComponent]
})
export class HeaderComponent{
    title = "Ekart"
}