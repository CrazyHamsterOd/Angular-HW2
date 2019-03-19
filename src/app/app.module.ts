import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { ToDoFormComponent } from './components/todo-header/toDoForm.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ItemComponent } from './components/item/item.component';
import { LineThroughDirective } from './directives/line-through/line-through.directive';
import { TextButtonComponent } from './components/text-button/text-button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { InputComponent } from './components/input/input.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWrapperComponent,
    ToDoFormComponent,
    ListItemComponent,
    ItemComponent,
    LineThroughDirective,
    TextButtonComponent,
    IconButtonComponent,
    InputComponent,
    CheckBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
