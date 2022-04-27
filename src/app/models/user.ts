export class User {
  student_ID: string;
  password: string;
  name: string;
  surname: string;
  gpax: number;
  location: string;
  phone: string;
  major: string;
  branch: string;
  gender: string;
  years: number;
  indentity_id: string;

  constructor(
    student_ID: string,
    password: string,
    name: string,
    surname: string,
    gpax: number,
    location: string,
    phone: string,
    major: string,
    branch: string,
    gender: string,
    years: number,
    indentity_id: string,
    )
  {
    this.student_ID = student_ID;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.gpax = gpax;
    this.location = location;
    this.phone = phone;
    this.major = major;
    this.branch = branch;
    this.gender = gender;
    this.years = years;
    this.indentity_id = indentity_id;
  }
}
