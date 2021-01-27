import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent   {

  nuevasCanciones:any[]=[];

  loading: boolean;
  error:boolean ;
  textoError:string;

  constructor(private spotify:SpotifyService){

  this.loading = true;
  this.error = false;

   this.spotify.getNewRelease()
   .subscribe( (data:any) => {
   this.nuevasCanciones = data;
   this.loading = false;
   }
   ,(errorServicio)=>{

    this.error=true;
    this.textoError = errorServicio.error.error.message;
    
    this.loading = false;
   }
   );
   
  }


}
