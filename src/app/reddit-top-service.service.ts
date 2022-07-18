import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RedditTopService{ 
  constructor(private http: HttpClient) {} 
  
  public getArticles(subreddit: string): Observable<any> { 
    console.log(subreddit);
    return this.http.get(`https://www.reddit.com/r/${subreddit}/top.json`); 
  }
}