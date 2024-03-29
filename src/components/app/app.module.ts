import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './home/recipe.list.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteRecipeComponent } from './delete-recipe/delete-recipe.component';
import { LoginComponent } from './login/login.component';


const routing = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: RecipeListComponent },
  { path: 'recipeform', component: RecipeFormComponent },
  { path: 'home/:Id', component: RecipeDetailComponent },
  {path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeFormComponent,
    RecipeDetailComponent,
    DeleteRecipeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routing),
    BrowserAnimationsModule,
    MatCardModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
