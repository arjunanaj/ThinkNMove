import { HttpClient ,HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Consulation } from './consulation';

@Injectable({
  providedIn: 'root'
})
export class ConsulationService {

  private basicUrl="http://localhost:9091/login"
  constructor(private http:HttpClient) { }

  public sendConsulation(consulation:Consulation):Observable<any>{
    return this.http.post<any>(`${this.basicUrl}/webSiteMail`,consulation,{observe:'response',responseType:'text' as 'json'}).pipe(
     
    )
  }
}
