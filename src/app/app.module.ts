import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { AlertsComponent } from './alerts/alerts.component';
import { MessagesComponent } from './messages/messages.component';
import { AlertService } from './services/alerts.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { MessageService } from './services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    AlertsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlertService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
