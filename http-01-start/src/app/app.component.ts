import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post('https://ng-complete-guide-7cab5-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData).subscribe();
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  fetchPosts() {
    this.http.get('https://ng-complete-guide-7cab5-default-rtdb.europe-west1.firebasedatabase.app/posts.json').subscribe((dataFetched) => {
      console.log(dataFetched);
    })
  }
}
