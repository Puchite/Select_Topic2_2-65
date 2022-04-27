export class User {
  Student_ID: string;
  Password: string;
  Name: string;
  Surname: string;
  Gpax: number;
  Location: string;
  Phone_Number: string;
  Major: string;
  Branch: string;
  Gender: string;
  Years: number;
  Indentity_id: string;

  constructor(
    branch: string,
    gpax: number,
    gender: string,
    indentity_id: string,
    location: string,
    major: string,
    name: string,
    password: string,
    phone: string,
    student_ID: string,
    surname: string,
    years: number,
    )
  {
    this.Student_ID = student_ID;
    this.Password = password;
    this.Name = name;
    this.Surname = surname;
    this.Gpax = gpax;
    this.Location = location;
    this.Phone_Number = phone;
    this.Major = major;
    this.Branch = branch;
    this.Gender = gender;
    this.Years = years;
    this.Indentity_id = indentity_id;
  }
}
