export class InstructorCourse {
  Instructor_ID:string;
  Course_ID:string;
  Course_Name:string;
  Section:number

  constructor(instructor_id:string, course_id:string, course_name:string, section:number)
  {
    this.Instructor_ID = instructor_id;
    this.Course_ID = course_id;
    this.Course_Name = course_name;
    this.Section = section;
  }
}
