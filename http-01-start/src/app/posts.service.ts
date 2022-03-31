import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })

export class PostsService {

    constructor(private http: HttpClient) { };

    createPost(postData: Post) {
        this.http.post<{ name: string }>('https://ng-complete-guide-7cab5-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData).subscribe();
    }

    fetchPosts() {
        return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-7cab5-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
            .pipe(map(responseData => {
                const postsArray: Post[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postsArray.push({ ...responseData[key], id: key })
                    }
                }
                return postsArray;
            }))
    }

}