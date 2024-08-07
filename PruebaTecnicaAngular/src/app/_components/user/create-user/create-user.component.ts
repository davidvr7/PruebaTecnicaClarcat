import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../_services/user.service';
import { User } from '../../../_model/user';
import { DepartmentService } from '../../../_services/department.service';
import { Department } from '../../../_model/department';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  userForm: FormGroup;  
  departments: Department[] = [];

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private departmentService: DepartmentService
  ) { 
    this.userForm = this.fb.group({ 
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''], 
      departmentId: ['', Validators.required],
    });
  }

  ngOnInit(): void {

    this.departmentService.getAll().subscribe(departments => {
      this.departments = departments; 
    });

  }

  submitForm(): void {
    if (this.userForm.valid) {
      const user = this.userForm.value as User;
      console.log(user)
      this.userService.create(user).subscribe(success => {
        if (success) {
          this.router.navigate(['/']);
        } else {
          alert('Failed to create user.');
        }
      });
    }
  }
}