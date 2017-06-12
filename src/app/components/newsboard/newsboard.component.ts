import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../services/news.service';

@Component({
  selector: 'app-newsboard',
  templateUrl: './newsboard.component.html',
  styleUrls: ['./newsboard.component.scss']
})
export class NewsboardComponent implements OnInit {

  allNews:any=[];
  showNews:any =[];
  finalOut:any = [];
  constructor(
    private _newsService:NewsService,
  ) { }

  ngOnInit() {
  this._newsService.getJSON().subscribe(data=>{

      this.allNews = data.response.news;
      this.getTabNews(0)
    });
  }

  tabMenu = ["trendingGalleries",
  "India & International",
  "trendingStories",
  "Entertainment & Sports",
  "The Buzz",
  "Technology & Business",
  "photoGalleries"]

  getTabNews(tab){

    let selectedCat = this.tabMenu[tab];
    let selectedNews = this.allNews.filter(function(item){
      if(item.name===selectedCat){
        return item;
      }
    });
    console.log(tab)
    console.log(selectedNews)
    if(selectedNews.length){
      if(this.allNews[tab].article){
        this.showNews = this.allNews[tab].article;
      }
      else{
        this.showNews = this.allNews[tab].records[0].article;
        console.log(this.showNews)
      }

    }

  }

  openNewsDetailView(url){
    window.open(url);
  }

}
