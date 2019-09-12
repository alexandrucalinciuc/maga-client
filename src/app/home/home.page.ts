import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform, LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { finalize } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    corsHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private http: HttpClient, 
        public platform: Platform, 
        private nativeHttp: HTTP, 
        private loadingCtrl: LoadingController) { }

    async testApi() {
        if(this.platform.is('cordova') === true) {
            let loading = await this.loadingCtrl.create();
            await loading.present();
            let nativeCall = this.nativeHttp.get("http://192.168.100.24:8080/hello", {}, {
                'Content-Type': 'application/json'
            });

            from(nativeCall).pipe(
                finalize(() => loading.dismiss())
            )
            .subscribe(data => {
                console.log(data);
            })
        }
        else {
            this.http.get("http://localhost:8080/hello").subscribe(res => { console.log(res) });
        }
    }

}
