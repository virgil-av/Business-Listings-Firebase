import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import {FirebaseService} from "./services/firebase.service";

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyD9q9Yx-KS5kLFXAPGhFfWKzCgSei0EK_0",
  authDomain: "business-contacts-a2a20.firebaseapp.com",
  databaseURL: "https://business-contacts-a2a20.firebaseio.com",
  storageBucket: "business-contacts-a2a20.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
