import {Injectable} from '@angular/core';
import{Http,Response,Headers,RequestOptions} from '@angular/http';
import{Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class CommentService
{
	constructor(private http:Http){}
	private commentUrl: string = './comments.json';

	// Fetch all existing comments
	getComments(): Observable<Comment[]> {

		// ...using get request
		return this.http.get(this.commentUrl)
			// ...and calling .json() on the response to return data
			.map((res: Response) => res.json())
			//...errors if any
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));

	}
	getCommentsPromise(): Promise<Comment[]> {

		// ...using get request
		return this.http.get(this.commentUrl).toPromise()
			// ...and calling .json() on the response to return data
			.then(response => response.json()as Comment[])
			

	}
}