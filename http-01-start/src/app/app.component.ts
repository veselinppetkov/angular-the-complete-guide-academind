import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService.createPost(postData);
  }

  onFetchPosts() {
    this.postsService.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

}
