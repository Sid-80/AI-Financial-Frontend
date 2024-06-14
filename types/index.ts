export interface USER{
    firstname:string;
    lastname:string;
    phone:string;
    email:string;
    password:string;
  }

export type LoginUser = {
    email:string;
    password:string;
}

export type RetirementPlanningFile = {
  _id: string;
  filename: string;
  createdAt:string;
  updatedAt: string;
}