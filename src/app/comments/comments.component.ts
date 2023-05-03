import { Component } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { IComments } from '../sharedClassesAndTypes/ICcomment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  commentsList: IComments[];
  errorMessage: any;
  commentId: string | null;

  constructor(
    private comments: CommentsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.commentId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getComments(Number(this.commentId));
    console.log(this.commentsList);
  }

  getComments(id: number) {
    this.comments.getComments(id).subscribe({
      next: (data) => (this.commentsList = data),
      error: (error) => (this.errorMessage = error),
    });
  }
}
