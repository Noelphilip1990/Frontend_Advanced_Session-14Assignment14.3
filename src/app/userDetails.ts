import { Component } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
@Component({
	selector:'user-details',
	template: `<h3>User Info - {{name}}</h3><br>
	<h3> User ID - {{id }}</h3><br>
	<button class="btn btn-primary lg" (click)="back()">BACK</button>`
})
export class UserDetails
{
	public name: string;
	public id: string;
	constructor(public act:ActivatedRoute,private router:Router)
	{
		var ob = act.params.subscribe(
			(params) => { this.name = params['name'];
				this.id = params['id'];
		}
			);
	}
	back()
	{
		this.router.navigate(['/']);
	}
}