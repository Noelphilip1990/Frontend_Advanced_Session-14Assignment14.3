import { Component } from '@angular/core';
@Component({
    selector: 'modal-demo',
	template: `
	
<div class="container">
  
<div class="container-fluid" >
	<h2>Assignment14.3 (PRomise and Observable Example)</h2>
<div class="row">		
	<div class="col-sm-4"><b><a routerLink="" routerLinkActive="active">PROMISE EXAMPLE</a></b></div><div class="col-sm-4"><b><a routerLink="about" routerLinkActive="active">OBSERVABLE EXAMPLE</a></b></div><br>
</div>
<div class="row">	
	<div class="col-sm-12">
		<router-outlet></router-outlet>
	</div>
</div>

</div>
</div>
`,
})

export class AppComponent{
	
	

friends: any = [
{ name: "Avnesh", hobby: "Coding"},
{ name: "Kaushik", hobby: "Coding" },
{ name: "Archana", hobby: "Cooking" },
{ name: "Piyush", hobby: "Singing" },
{ name: "Archit", hobby: "Sports" },
{ name: "Hema", hobby: "Gossiping" }
]; 

	constructor()
	{
		
	}
}
