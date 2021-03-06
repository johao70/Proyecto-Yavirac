import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  splash = true;
    notes = [];
    @ViewChild("myNav") nav: NavController
  constructor(public navCtrl: NavController, public notesService: NotesService) {
      notesService.getNotes()
        .valueChanges().subscribe( notasApp => {
          this.notes = notasApp;
        });
        
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 3000);
  }

  public goToDetail(id){
    this.navCtrl.push(DetailPage, {id:id});
  }

  public createNote(){
    this.navCtrl.push(DetailPage, {id:0});
  }

}