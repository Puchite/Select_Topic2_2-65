export class Register {
  Student_ID:string;
  Course_ID:string;
  Section:number;
  Year:string;
  Semester:number;
  Grade:any;



  constructor(Student_ID:string,course_id:string, Section:number, Year:string,Semester:number,Grade:any)
  {
    this.Student_ID = Student_ID;
    this.Course_ID = course_id;
    this.Section = Section;
    this.Year = Year;
    this.Semester = Semester;
    this.Grade = Grade;
  }
}
