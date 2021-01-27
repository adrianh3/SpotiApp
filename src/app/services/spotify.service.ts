import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
  
  console.log("Servicio Listo");
  }

  getQuery(query: string){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDe0c_HvTRvlDKUtKfAy858tv_9bWbLDGIWiIRclMBPIcjh6lihCGjjwA6CYM0nBl-W06JcAjFZXLPEP8U'
    });   
    return this.http.get(url,{headers});
  
    }

  getNewRelease(){
    return this.getQuery('browse/new-releases').pipe( map(data =>  data['albums'].items));
  }

  getArtistas(termino:string){
     return this.getQuery(`search?q=${{termino}}&type=artist&market=MX&limit=15`)
            .pipe(map ( data =>  data['artists'].items));
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
           //.pipe(map ( data =>  data['artists'].items));
 };

 getTopTracks(id:string){
  return this.getQuery(`artists/${id}/top-tracks?market=MX`)
         .pipe(map ( data =>  data['tracks']));
};

}
