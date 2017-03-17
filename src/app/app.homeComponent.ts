import {Component} from '@angular/core';
import{CommentService} from './commentService';

@Component({
	selector:'home',
	template:`<h2>Promise Example Section</h2>
	<div class="container">
	<div class="container-fluid">
	 <div class="row">
	 <div class="col-md-6"><b>ID</b></div><div class="col-md-6"><b>NAME</b></div>
	 </div>
	 
	 	<div class="row">
	 	<div *ngFor="let com of comment">
			<div class="col-md-6">{{com.id}}</div><div class="col-md-6">{{com.name}}</div>
	 	</div>
	 </div>
	 </div>
	 </div>
	`,
	providers: [CommentService]
})
export class HomeComponent
{
	 comment:Comment[]=[];
	public data: any[] = [];
	 users = [
	{ id: 1, name: "Noel"},
	{ id: 2, name: "Javed" },
	{ id: 3, name: "Salim" },
	{ id: 4, name: "Jose" },
	{ id: 5, name: "Rose" },
];
	
	 constructor(private cs:CommentService) {
		 this.loadUsers();
		 console.log("LSIT:" + this.comment.length);
	 }
	/** loadComments() {
		 // Get all comments
		 this.cs.getComments()
			 .subscribe(
			 comment => this.comment = comment, //Bind to view

			 err => {
				 // Log errors if any
				 console.log(err);
			 });
		}	 **/

loadUsers() 
{
  this.cs.getCommentsPromise()
  	.then(
  		comment => this.comment = comment
  		)

}
		
	 
	
}	