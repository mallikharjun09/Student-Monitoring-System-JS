class Student{
         constructor(id,name,email,phone,gender){
	this.id = id
	this.name = name
	this.email = email
	this.phone = phone
	this.gender = gender
         }
}

class StudentServices{
           constructor(){
	this.students = []
            	this.index = 0
	this.st1 = null
            	this.data = ""
            }
            addStudent(st){
	this.students[this.index] = st;
	this.index++;
            }
            getStudents(){
	this.data = "<table><tr><th>Id</th><th>Name</th><th>Email ID</th><th>Phone Number</th><th>Gender</th></tr>"
	for(var i=0;i<this.students.length;i++){
	          this.st1 = this.students[i];
	          this.data = this.data + "<tr>"
	          this.data = this.data + "<td>"+this.st1.id+"</td>"
	          this.data = this.data + "<td>"+this.st1.name+"</td>"
	          this.data = this.data + "<td>"+this.st1.email+"</td>"
	          this.data = this.data + "<td>"+this.st1.phone+"</td>"
	          this.data = this.data + "<td>"+this.st1.gender+"</td></tr>"
	}
	this.data = this.data+"</table>"
	return this.data
            }
}