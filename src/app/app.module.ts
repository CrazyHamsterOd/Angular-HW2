import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { ToDoFormComponent } from './toDoForm/toDoForm.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWrapperComponent,
    ToDoFormComponent,
    ListItemComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
