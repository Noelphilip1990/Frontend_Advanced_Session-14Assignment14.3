import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './app.homeComponent';
import { AboutComponent } from './app.aboutComponent';
import { UserDetails } from './userDetails';
const route:Routes =[
{ path: '', component: HomeComponent },
{path:'user/:name/:id' ,component: UserDetails},
{ path: 'about', component: AboutComponent },	
{ path: '**', component: HomeComponent },
]

export const routing= RouterModule.forRoot(route);