import { State, Selector, Action, StateContext } from '@ngxs/store';
import { TVSeries } from '../models/tv_series.model';
import { AddTVSeries, DeleteTVSeries } from '../actions/tv_series.actions';
import { Injectable } from '@angular/core';

export class TVSeriesStateModel {
  tvSeriesList: TVSeries[];
}

@State<TVSeriesStateModel>({
  name: 'tvSeries',
  defaults: {
    tvSeriesList: []
  }
})
@Injectable()
export class TVSeriesState {

  @Selector()
  static getTVSeriesList(state: TVSeriesStateModel) {
    return state.tvSeriesList;
  }

  @Action(AddTVSeries)
  add({ getState, patchState }: StateContext<TVSeriesStateModel>, { payload }: AddTVSeries) {
    const state = getState();
    patchState({
      tvSeriesList: [...state.tvSeriesList, payload]
    })
  }

  @Action(DeleteTVSeries)
  delete({ getState, patchState }: StateContext<TVSeriesStateModel>, { id }: DeleteTVSeries) {
    const state = getState();
    patchState({
      tvSeriesList: state.tvSeriesList.filter(tvSeries => tvSeries._id !== id)
    })
  }

}
