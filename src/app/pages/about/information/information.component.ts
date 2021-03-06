import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {

  constructor(private router: Router, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.clear();
  }

  start() {
    this.router.navigateByUrl('/questions', { replaceUrl: true });
  }

}
