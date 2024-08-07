import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs'; 
import { formatDate } from '@angular/common';
import { User } from '../../../_model/user';
import { UserService } from '../../../_services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit {
  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phoneNumber', 'actions'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  userForm: FormGroup;
  currentUser: User | null = null;
  deleteCurrentUser!: User;

  department: string = 'HR';

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      id: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''], 
    });

 
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

    this.route.paramMap.subscribe(params => { 
      const departmentParam = params.get('department'); 
      if (departmentParam) {
        this.department = departmentParam; 
        this.loadUsers(this.department);
      }   
    });
  }

  loadUsers(department: string): void {
    this.userService.getUserDepartment(department).pipe(
      catchError(error => {
        console.error('Error loading users:', error);
        return of([]);
      }),
      finalize(() => { 
        console.log('Request complete'); 
      })
    ).subscribe(users => {
      this.dataSource.data = users;
      console.log(users)
    });
  } 

  deleteUser(id: number): void {
    this.userService.deleteById(id).pipe(
      catchError(error => {
        console.error('Error deleting user:', error); 
        return of(false);  
      }),
      finalize(() => {
        console.log('Delete request complete'); 
        this.hideDeleteModal();
        this.loadUsers(this.department);
      })
    ).subscribe(success => {
      if (success) {
        console.log("User deleted successfully");
      } else {
        console.log("Failed to delete user");
      }
    });
  }
  

  openDeleteModal(id: number): void {
    const user = this.dataSource.data.find(u => u.id === id);

    if (user) {
      this.deleteCurrentUser = user;
    }
  }

  openUpdateModal(id: number): void {
    const user = this.dataSource.data.find(u => u.id === id);
    if (user) {
      this.currentUser = user; 

      const userClone = { ...user };
   
      this.userForm.patchValue(userClone);
    }
  }

  submitForm(): void {
    if (this.userForm.valid) {
      const user = this.userForm.value as User;
      this.userService.update(user).pipe(
        catchError(error => {
          console.error('Error updating user:', error);
          return of(false);  // Retorna un observable con `false` en caso de error
        }),
        finalize(() => {
          console.log('Update request complete'); 
          this.loadUsers(this.department);  
          this.hideModal();  
        })
      ).subscribe(success => {
        if (success) { 
          console.log('User updated successfully');
        }
      });
    }
  }

  hideModal(): void {
    const modalElement = document.getElementById('userModal');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.setAttribute('aria-hidden', 'true');
      modalElement.setAttribute('style', 'display: none;');
      document.body.classList.remove('modal-open');
      const modalBackdrop = document.querySelector('.modal-backdrop');
      if (modalBackdrop) {
        modalBackdrop.remove();
      }
    }
  }

  hideDeleteModal(): void {
    const modalElement = document.getElementById('userDeleteModal');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.setAttribute('aria-hidden', 'true');
      modalElement.setAttribute('style', 'display: none;');
      document.body.classList.remove('modal-open');
      const modalBackdrop = document.querySelector('.modal-backdrop');
      if (modalBackdrop) {
        modalBackdrop.remove();
      }
    }
  }
}