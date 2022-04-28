export class Course {
  Course_ID:string;
  Course_Name:string;
  Course_Credit:number;


  constructor(course_id:string, course_name:string, course_credit:number)
  {
    this.Course_ID = course_id;
    this.Course_Name = course_name;
    this.Course_Credit = course_credit;
  }
}
