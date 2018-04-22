// input
var name_input = document.querySelector("#name");
var surename_input = document.querySelector("#surename");
var group_input = document.querySelector("#group");
var mail_input = document.querySelector("#mail");
var grade_input = document.querySelector("#grade");
var add_button = document.querySelector("#add");
var number = [];
var id = 2;
//table
add_button.onclick = function () {
    var number_value = grade_input.value;
    sum = 0;
    if (number_value <= 100) {
        var Id = id++;
        var table = document.querySelector("#p403");
        var row = table.insertRow(-1);
        console.log(row)
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = Id;
        cell2.innerHTML = name_input.value;
        cell3.innerHTML = surename_input.value;
        cell4.innerHTML = group_input.value;
        cell5.innerHTML = mail_input.value;
        cell6.innerHTML = grade_input.value;
        var Name = name_input.value
        var Surename = surename_input.value
        var Mail = mail_input.value;
        var Group = group_input.value
        var student = new Student(Name, Surename, Mail, Group)

        name_input.value = "";
        surename_input.value = "";
        group_input.value = "";
        mail_input.value = "";
        grade_input.value = "";
    }


}

function Student(_name, _surename, _mail, _group) {
    var name = _name;
    var grade = [];
    var surename = _surename;
    var mail = _mail;
    var group = _group;

    this.Add_grade=function(_grade){
        if(typeof _grade=="number" && _grade>=0 && _grade<=100){
            _grade.push(grade);
        }
        
    }

    this.Get_name=function(){
        return mail;
    }

    this.Get_surename=function(){
        return surename;
    }

    this.Get_mail=function(){
        return mail;
    }

    this.Get_group=function(){
        return group;
    }


}
var student1= new Student("Zuleyxa", "haciyeva","p404","bendclkmcds","90");
console.log(Student)
