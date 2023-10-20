import { Component, OnInit } from '@angular/core';
import { SeriesService } from './series.service';
import { Serie } from './serie';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit{
  constructor(private service :SeriesService){}

  series:Serie[] = [];
  avgSeasons:number = 0;

  getSeries():void{
    this.service.getSeries().subscribe((series)=>{
      this.series = series;
      this.avgSeasons = this.service.getSeriesSeasonsAverage(this.series);
    })
  }
  
  ngOnInit(): void {
    this.getSeries();
  }
;

}
