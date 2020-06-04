import { Observable } from 'rxjs';

export interface ICrudService<T> {

    ReponseUrl: string;

    getAll(): Observable<T[]>;

    // getById(payload: string): Observable<T>;

    add(payload: T): Observable<T>;

    
    delete(payload: string);

}
