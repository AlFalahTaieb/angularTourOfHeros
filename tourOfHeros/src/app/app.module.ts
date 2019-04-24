import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DistrosComponent } from './distros/distros.component';
import { DistroDetailComponent } from './distro-detail/distro-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DistrosComponent,
    DistroDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
