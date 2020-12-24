import { from, Observable } from "rxjs";
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { PostModel } from "src/app/models/post.model";


@Injectable({
    providedIn: 'root'
})
export class PostsService{

    url= 'http://localhost:4200';

    constructor (private httpClient: HttpClient){}
    
    getPosts():Observable<PostModel[]> {
        return this.httpClient.get<PostModel[]>(this.url)
      }
      
}