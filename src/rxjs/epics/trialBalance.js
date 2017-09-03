import { Observable } from 'rxjs/Observable';
import { database } from '../../firebase';
import { FETCH_TRIAL_BALANCE } from '../../modules/trialBalance/constants'
import {
  isFetchingTrialBalance,
  trialBalanceFetchSuccess,
  trialBalanceFetchFailure
} from '../../modules/trialBalance/actions/trialBalanceActions'


export const pingEpic = action$ =>

  action$.ofType('CHANGE_ITEM_AMOUNT')
    .debounceTime(500)
    .distinctUntilChanged()
    .switchMap(action => {

      const { uid, section, label, amount } = action.payload;

      const emptyObservable = Observable.of(new Promise(() => {}))

      if (isNaN(amount)) return emptyObservable

      database.ref(`/users/${uid}/trialBalance`).
        child(section).
          child(label).
            set(amount)

      return emptyObservable
    })
    .mapTo({type: 'PONG'})


export const trialBalanceEpic = action$ =>
    action$.ofType('FETCH_TRIAL_BALANCE').
        mergeMap(({ userId }) => {

            const userTrialBalance = database.ref(
                  `/users/${userId}/trialBalance`
                )
                .once('value')
                .then(snapshot => snapshot.val())

            return Observable.fromPromise(userTrialBalance)
                .map(trialBalance => trialBalanceFetchSuccess(trialBalance))
                .catch(trialBalanceFetchFailure())
                .startWith(isFetchingTrialBalance())
        })
