import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../_services/user.service';
import { User } from '../../../_model/user';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  userForm: FormGroup;  
  
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.userForm = this.fb.group({ 
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''], 
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    if (this.userForm.valid) {
      const user = this.userForm.value as User;
      
      this.userService.create(user).subscribe(success => {
        if (success) {
          this.router.navigate(['/home']);
        } else {
          alert('Failed to create user.');
        }
      });
    }
  }
}