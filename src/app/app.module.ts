import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UniqueDirective } from './user-form/unique.directive';
import { SizeComponent } from './user-form/size/size.component';

@NgModule({
  declarations: [
    AppComponent,
      UserFormComponent,
      UniqueDirective,
      SizeComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
