import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditModeService {
  private isEditMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/member-ordering
  readonly isEditMode$: Observable<boolean> = this.isEditMode.asObservable();
  constructor() {}

  setUpdateMode(isEditMode: boolean): void {
    this.isEditMode.next(isEditMode);
  }
}
