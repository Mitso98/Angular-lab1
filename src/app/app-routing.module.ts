import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { DiscountedProductsComponent } from './discounted-products/discounted-products.component';
import { RegularProductsComponent } from './regular-products/regular-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: 'discounted', component: DiscountedProductsComponent },
      { path: 'regular', component: RegularProductsComponent },
    ],
  },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id/comments', component: CommentsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
