import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(){
        this.valor1 = this.numeroAleatorio();
        this.valor2 = this.numeroAleatorio();
        this.valor3 = this.numeroAleatorio();
    }

    public numeroAleatorio() : number{
        return Math.trunc(Math.random()*6)+1;
    }

    public valor1 : number = 0;
    public valor2 : number = 0;
    public valor3 : number = 0;
    public resultado : string = "";

    public tirar() : void {
        this.valor1 = this.numeroAleatorio();
        this.valor2 = this.numeroAleatorio();
        this.valor3 = this.numeroAleatorio();
        if(this.valor1 == this.valor2 && this.valor1 == this.valor3){
            this.resultado = 'Ganaste';
        }else{
            this.resultado = 'Perdiste';
        }
    }
}