import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SubSink } from "subsink";
import { HttpService } from "../../../common/services/http.service";
import { debounceTime, tap, map } from "rxjs/operators";

import { Observable } from 'rxjs';
import { NewsData } from '../../../common/interfaces/news.interface';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  totalStats$;
  stateWiseData$;
  contactInfo$;
  worldStats$;
  searchTerm: FormControl;
  news$: Observable<NewsData>;

  private subs = new SubSink();
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.searchTerm = new FormControl();
    this.totalStats$ = this.httpService.getTotalStatus();
    this.stateWiseData$ = this.httpService.getStateWiseData();
    this.worldStats$ = this.httpService.getWorldStats().pipe(
      map((data) => {
        return [
          { label: "Cases", value: data.cases },
          { label: "Active", value: data.active },
          { label: "Deaths", value: data.deaths },
          { label: "Recovered", value: data.recovered },
        ];
      })
    );
    this.getPrimaryContactDetails();
    this.listenToSearchInputAndFilterData();
    this.news$ = this.httpService.getNews();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.unsubscribe();
  }

  getPrimaryContactDetails() {
    this.contactInfo$ = this.httpService.getPrimaryContactDetails();
  }
  listenToSearchInputAndFilterData() {
    this.subs.add(
      this.searchTerm.valueChanges
        .pipe(
          debounceTime(500),
          tap((data) => {
            this.stateWiseData$ = this.httpService.getStateWiseData().pipe(
              map((states) =>
                states.filter((item: { state: string }) => {
                  return item.state.toLowerCase().includes(data.toLowerCase());
                })
              )
            );
          })
        )
        .subscribe()
    );
  }
}
