import { Effect, Actions } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { mergeMap, tap, map, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {

    @Effect()
    authSignUp = this.action$.ofType(AuthActions.TRY_SIGNUP)
        .pipe(map((action: AuthActions.TrySignup) => {
            return action.payload;
        })
            , switchMap((authData: { username: string, password: string }) => {
                //fromPromise: converts promise to observable
                return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
            })
            , switchMap(() => {
                return from(firebase.auth().currentUser.getIdToken());
            })
            , mergeMap((token: string) => {
                this.router.navigate(['/']);
                return [
                    {
                        type: AuthActions.SIGNUP
                    },
                    {
                        type: AuthActions.SET_TOKEN,
                        payload: token
                    }
                ]

            }))

    @Effect()
    authSignIn = this.action$.ofType(AuthActions.TRY_SIGNIN)
        .pipe(map((action: AuthActions.TrySignin) => {
            return action.payload;
        })
            , switchMap((authData: { username: string, password: string }) => {
                //fromPromise: converts promise to observable
                return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
            })
            , switchMap(() => {
                return from(firebase.auth().currentUser.getIdToken());
            })
            , mergeMap((token: string) => {
                this.router.navigate(['/']);
                return [
                    {
                        type: AuthActions.SIGNIN
                    },
                    {
                        type: AuthActions.SET_TOKEN,
                        payload: token
                    }
                ]

            }))

    @Effect({ dispatch: false })
    authLogOut = this.action$.ofType(AuthActions.LOGOUT)
        .pipe(tap(
            () => {
                this.router.navigate(['/']);
            }
        ))

    constructor(private action$: Actions,
        private router: Router) { }

}