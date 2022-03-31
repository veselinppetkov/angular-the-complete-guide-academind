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
  error = null;

  initialFetching() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe((posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.statusText;
    });
  }

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.initialFetching();
  }

  onCreatePost(postData: Post) {
    this.postsService.createPost(postData).subscribe(() => {
      this.initialFetching();
    });

  }

  onFetchPosts() {
    this.initialFetching();
  }

  onClearPosts() {
    this.postsService.removePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

}
