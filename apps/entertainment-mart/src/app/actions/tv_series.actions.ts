import { TVSeries } from '../models/tv_series.model';

export class AddTVSeries {
  static readonly type = '[TVSeries] Add';

  constructor(public payload: TVSeries) {
    
  }
}

export class DeleteTVSeries {
  static readonly type = '[TVSeries] Delete';

  constructor(public id: string) {
    
  }
}
