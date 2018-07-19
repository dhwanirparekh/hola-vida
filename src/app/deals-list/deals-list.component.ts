import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as DealListActions from './deals-list-store/deals-list.actions';
import * as fromDeals from './deals-list-store/deals-list.reducer';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-deals-list',
  templateUrl: './deals-list.component.html',
  styleUrls: ['./deals-list.component.css'],
  animations: [
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            opacity: 0,
            transform: 'translateX(-100px)',
            offset: 0
          }),
          style({
            opacity: 0.5,
            transform: 'translateX(-50px)',
            offset: 0.3
          }),
          style({
            opacity: 1,
            transform: 'translateX(-20px)',
            offset: 0.8
          }),
          style({
            opacity: 1,
            transform: 'translateX(0)',
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(200,
            style({
              color: 'red'
            })),
          animate(1000, keyframes([
            style({
              opacity: 1,
              transform: 'translateX(0)',
              offset: 0
            }),
            style({
              opacity: 1,
              transform: 'translateX(20px)',
              offset: 0.3
            }),
            style({
              opacity: 0.5,
              transform: 'translateX(50px)',
              offset: 0.8
            }),
            style({
              opacity: 0,
              transform: 'translateX(100px)',
              offset: 1
            })
          ]))
        ])
      ])
    ])]
  })


export class DealsListComponent implements OnInit {

  dealState: Observable<fromDeals.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.dealState = this.store.select('dealsList');
  }

  onDealEdit(index: number) {
    this.store.dispatch(new DealListActions.StartEditing(index));
  }

}
