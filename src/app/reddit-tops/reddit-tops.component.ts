import { Component, OnInit } from '@angular/core';
import { RedditTopService } from '../reddit-top-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reddit-tops',
  templateUrl: './reddit-tops.component.html',
  styleUrls: ['./reddit-tops.component.css'],
})
export class RedditTopsComponent implements OnInit {

  inputSubreddit:string='';

  public articles: any = null;

  constructor( private topService: RedditTopService) { }

  ngOnInit(): void {}

  getArticles = () => {
    console.log('before', this.articles)
    this.topService.getArticles(this.inputSubreddit).subscribe(data => {
      console.log('DATA: ' , data)
      this.articles = data.data.children
    });
    console.log('after', this.articles)
  }

  authorClick = (author:string) => {
    window.location.href = `https://www.reddit.com/u/${author}`
  }

  titleClick = (permalink:string) => {
    window.location.href = `https://www.reddit.com/${permalink}`
  }

}
