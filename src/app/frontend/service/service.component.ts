import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private route: ActivatedRoute, private title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data["title"]);
  }

}
