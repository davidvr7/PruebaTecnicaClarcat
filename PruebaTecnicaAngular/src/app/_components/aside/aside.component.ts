import { Component, OnInit } from '@angular/core'; 
import { Department } from './../../_model/department';
import { DepartmentService } from '../../_services/department.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  departments: Department[] = [];
  filteredDepartments: Department[] = [];
  searchTerm: string = '';

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.departmentService.getAll().subscribe(departments => {
      this.departments = departments;
      this.filteredDepartments = departments;
      
      console.log(this.filteredDepartments)
    });
  }

  onSearch(): void {
    if (this.searchTerm) {
      this.filteredDepartments = this.departments.filter(department =>
        department.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredDepartments = this.departments;
    }
  }
}