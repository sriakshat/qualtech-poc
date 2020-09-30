import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { PaginationService } from '../_services'

@Component({ templateUrl: 'pagination.component.html' })
export class PaginationComponent {
    loading = false;
    isLoggedIn = false;
    users: User[];
    config: any;
    collection = { count: 250, data: {}};

    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public responsive: boolean = true;
    public labels: any = {
        previousLabel: '<--',
        nextLabel: '-->',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };

    constructor(private userService: UserService, private paginationService: PaginationService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
            this.isLoggedIn = true;
            if(this.isLoggedIn){
                this.paginationService.getAll().subscribe(data => {
                    this.collection.data = data
                });
            }
        });
        
    this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.collection.count
          };
    }

    pageChanged(event){
        console.log(event);
        this.config.currentPage = event;
      }
}