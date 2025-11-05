import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
    private termSubject = new BehaviorSubject<string>('');

    setTerm(term: string) {
        this.termSubject.next(term || '');
    }

    get term$(): Observable<string> {
        return this.termSubject.asObservable();
    }

    clear() {
        this.termSubject.next('');
    }
}
