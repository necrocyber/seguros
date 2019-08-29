import { Component, OnInit } from '@angular/core';
//services
import { FormService } from '../../services/form.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  personal: any = {}

  constructor(private service: FormService) { }

  async ngOnInit() {
    this.personal = await this.service.getDataUser(2)
  }

}
