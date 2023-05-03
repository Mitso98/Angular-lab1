import { Component } from '@angular/core';
import { IPost } from '../sharedClassesAndTypes/IPost';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  postsList: IPost[];
  errorMessage: any;
  constructor(private posts: PostsService, private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  navigate(id: number) {
    this.router.navigate(['/posts', id, 'comments']);
  }

  getUsers() {
    this.posts.getPosts().subscribe({
      next: (data) => (this.postsList = data),
      error: (error) => (this.errorMessage = error),
    });
  }
}
