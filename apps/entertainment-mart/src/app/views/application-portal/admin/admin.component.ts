import { Component, OnInit } from '@angular/core';
import { TVSeries } from '../../../models/tv_series.model';
import { Store } from '@ngxs/store';
import { AddTVSeries } from '../../../actions/tv_series.actions';

@Component({
  selector: 'angular-state-management-playground-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  tvSeries: TVSeries = {
    title: null,
    runtime: null,
    rating: null
  };

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.tvSeries) {
      const payload: TVSeries = this.tvSeries;
      this.store.dispatch(new AddTVSeries(payload));
    }
  }

}
