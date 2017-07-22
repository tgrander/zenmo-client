import { Observable } from 'rxjs/Observable';
import { auth } from '../../firebase';

export const pingEpic = action$ =>
  action$.ofType('CHANGE_ITEM_AMOUNT')
    .debounceTime(500)
    .switchMap(action => {
      console.log('RXJS ACTION: ', action);
      return Observable.of(new Promise(() => {}))
    })
    .mapTo({type: 'PONG'})

// export const authEpic = action$ =>
//   action$.ofType('ATTEMPT_USER_SIGN_IN').
//     mergeMap(action =>
//       auth.signInWithEmailAndPassword(
//         action.user.email,
//         action.user.password
//       ).map(res => )
//     )


/*
1.
2.
3.
*/
