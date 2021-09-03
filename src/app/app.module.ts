import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
