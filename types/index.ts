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