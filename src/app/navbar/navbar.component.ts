import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    public mobile = true;

    constructor(public platform: Platform,
                public breakpointObserver: BreakpointObserver,
                private menu: MenuController) {}

    ngOnInit(): void {
        this.breakpointObserver.observe('(max-width: 899px)').subscribe(result => {
            this.mobile = (result.matches) ? true : false;
        });
    }
}
