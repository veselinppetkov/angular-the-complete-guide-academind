import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })

export class PostsService {

    constructor(private http: HttpClient) { };

    createPost(postData: Post) {
        return this.http.post<{ name: string }>('https://ng-complete-guide-7cab5-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData);
    }

    fetchPosts() {
        return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-7cab5-default-rtdb.europe-west1.firebasedatabase.app/posts.json', {
            headers: new HttpHeaders({ "X-Authorization": "You the 1!" })
        })
            .pipe(map(responseData => {
                const postsArray: Post[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postsArray.push({ ...responseData[key], id: key })
                    }
                }
                return postsArray;
            }), catchError(errorCatched => {
                return throwError(errorCatched)
            }))
    }

    removePosts() {
        return this.http.delete('https://ng-complete-guide-7cab5-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
    }

}