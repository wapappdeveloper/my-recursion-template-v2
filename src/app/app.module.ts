import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecursionComponent } from './recursion/recursion.component';
import { TreeViewComponent } from './tree-view/tree-view.component';


@NgModule({
  declarations: [
    AppComponent,
    RecursionComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
