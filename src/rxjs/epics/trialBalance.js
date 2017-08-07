import { Observable } from 'rxjs/Observable';
import { auth, database } from '../../firebase';
import { FETCH_TRIAL_BALANCE } from '../../modules/trialBalance/constants'
import {
  isFetchingTrialBalance,
  trialBalanceFetchSuccess,
  trialBalanceFetchFailure
} from '../../modules/trialBalance/actions/trialBalanceActions'

export const pingEpic = action$ =>
  action$.ofType('CHANGE_ITEM_AMOUNT')
    .debounceTime(500)
    .switchMap(action => {
      const { uid, section, label, amount } = action.payload;

      database.ref(`/users/${uid}/trialBalance`).
        child(section).
          child(label).
            set(amount)

      return Observable.of(new Promise(() => {}))
    })
    .mapTo({type: 'PONG'})

export const trialBalanceEpic = action$ =>
    action$.ofType('FETCH_TRIAL_BALANCE')
        .mergeMap(({ userId }) => {

            const userTrialBalance = database.ref(`/users/${userId}/trialBalance`)
                .once('value')
                .then(snapshot => snapshot.val())

            return Observable.fromPromise(userTrialBalance)
                .map(trialBalance => trialBalanceFetchSuccess(trialBalance))
                .startWith(isFetchingTrialBalance())
        })

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
