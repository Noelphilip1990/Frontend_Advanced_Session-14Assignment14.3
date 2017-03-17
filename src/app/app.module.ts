import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './app.homeComponent';
import { AboutComponent } from './app.aboutComponent';
import { CommentService } from './commentService';
import { Comment } from './comment';
//Routing stuff
import { routing } from './app.Routes';
import { UserDetails } from './userDetails';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule, 
        routing
        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        UserDetails,
        

    ],
    providers: [CommentService],
    bootstrap: [AppComponent]

})
export class AppModule {
}