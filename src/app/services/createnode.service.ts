import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Url} from 'url';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CreatenodeService {

  constructor(private http: HttpClient) { }

  createNode(data) {
    return this.http.post('/api/gcp/admin/create-bucket', data);
  }

  getAllNodes() {
    return this.http.get('/api/gcp/user/all-blobs/ecmspace-data');
  }
}
