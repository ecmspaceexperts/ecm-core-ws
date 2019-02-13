import {Component, Input, OnInit} from '@angular/core';
import {CreatenodeService} from '../../services/createnode.service';

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.css']
})
export class CreateNodeComponent implements OnInit {

  data: any = []
  node = {
    bucketname: '',
    bucketlocation: ''
  }
  constructor(private createnodeService: CreatenodeService) { }

  ngOnInit() {
  }

  public submitNodeName(cparam, nparam) {
   if (cparam == '') {
      alert('Please select Region');
   } else if (nparam == '') {
      alert('Please enter Node Name');
    } else {
     try {
       this.node = {
         bucketname: nparam,
         bucketlocation: cparam
       }
       // console.log(author,"author")
       this.createnodeService.createNode(this.node)
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
}
