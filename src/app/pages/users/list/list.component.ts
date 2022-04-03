import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { UserInterface } from './../interfaces/user.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private UserService: UserService) { }
  users!: UserInterface[];
  loading: boolean = true;

  ngOnInit(): void {
    this.UserService.getProducts()
      .pipe(
        tap((users: UserInterface[]) => this.users = users)
      )
      .subscribe(data => {
        this.loading = false;
      });
  }
  

  displayedColumns: string[] = ['albumId', 'id', 'title', 'url', 'thumbnailUrl', 'action'];

}