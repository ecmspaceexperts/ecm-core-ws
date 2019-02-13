import { Component, OnInit } from '@angular/core';
import {CreatenodeService} from '../../services/createnode.service';

@Component({
  selector: 'app-list-node',
  templateUrl: './list-node.component.html',
  styleUrls: ['./list-node.component.css']
})
export class ListNodeComponent implements OnInit {

  data: any = []
  nodedetails = {
    id: '',
    name: '',
    size: '',
    bucket: ''
  }
  constructor(public createnodeService: CreatenodeService) { }

  ngOnInit() {
    this.nodeListPage();
  }

  nodeListPage() {
    try {
      this.createnodeService.getAllNodes()
        .subscribe(resp => {
            console.log(resp, 'res');
            this.data = resp;
          },
          error => {
            console.log(error, 'error');
          })
    } catch (e) {
      console.log(e);
    }
  }
}
