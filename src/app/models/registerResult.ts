export class RegisterResult {
  Course_ID:string;
  Course_Name:string;
  Section:number;


  constructor(course_id:string, course_name:string, Section:number)
  {
    this.Course_ID = course_id;
    this.Course_Name = course_name;
    this.Section = Section;
  }
}
