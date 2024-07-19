import { HttpClient ,HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Consulation } from './consulation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsulationService {

  private basicUrl=environment.backendUrl;
  constructor(private http:HttpClient) { }

  public sendConsulation(consulation:Consulation):Observable<any>{
    return this.http.post<any>(`${this.basicUrl}/ThinkNMove/mail`,consulation,{observe:'response',responseType:'text' as 'json'}).pipe(
     
    )
  }
}
