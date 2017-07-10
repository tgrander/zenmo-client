import { Observable } from 'rxjs/Observable';

export const pingEpic = action$ =>
  action$.ofType('MODIFY_ASSET_AMOUNT')
    .debounceTime(500)
    .mergeMap(action => {
      console.log('RXJS ACTION: ', action);
      return Observable.of(new Promise(() => {}))
    })
    .mapTo({type: 'PONG'})
