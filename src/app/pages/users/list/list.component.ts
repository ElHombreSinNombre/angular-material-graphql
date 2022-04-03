import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { UserInterface } from './../interfaces/user.interface';
import { tap } from 'rxjs/operators';
//import { Apollo, gql } from 'apollo-angular';
//import { Subscription } from 'rxjs';


/*const GET_POST = gql`
  query GetPosts {
    posts {
      id
      title
    }
  }
`;*/

@Component({
  selector: 'app-user',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserComponent implements OnInit {
  //private querySubscription: Subscription | undefined;

  constructor(private UserService: UserService, /*private apollo: Apollo*/) { }

  users!: UserInterface[];
  loading: boolean = true;

  ngOnInit(): void {

    /* this.querySubscription = this.apollo.watchQuery<any>({
       query: GET_POST
     })
       .valueChanges
       .subscribe(({ data }) => {
         this.users = data.posts;
       });*/

    this.UserService.getProducts()
      .pipe(
        tap((users: UserInterface[]) => this.users = users)
      )
      .subscribe(data => {
        this.loading = false;
      });
  }

  ngOnDestroy() {
    // this.querySubscription.unsubscribe();
  }

  displayedColumns: string[] = ['albumId', 'id', 'title', 'url', 'thumbnailUrl', 'action'];

}
