import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private selectFiltersEnabled = new BehaviorSubject<boolean>(true);
  selectFiltersEnabled$ = this.selectFiltersEnabled.asObservable();
  private filterValueSource = new Subject<{key:string,val:string}[]>();
  filterValue$ = this.filterValueSource.asObservable();

  setFilterValue(value:{key:string,val:string}[]) {
    this.filterValueSource.next(value);
  }

  disableSelectFilters() {
    this.selectFiltersEnabled.next(false);
  }

  enableSelectFilters() {
    this.selectFiltersEnabled.next(true);
  }

}
