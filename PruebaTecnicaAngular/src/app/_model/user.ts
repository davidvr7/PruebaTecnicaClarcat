import { Department } from "./department";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string; 
    phoneNumber?: string;  
    department: Department
  }
  