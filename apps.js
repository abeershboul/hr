'use strict'
let allEmployees = [];
var id = 1000;
var id2=1000;
function EmployeeInfo(fullName, department, level, image) {
    this.fullName = fullName;
    this.employeeID = this.uniqueIdNumber();
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = this.netsalary(this.level);
    allEmployees.push(this);

}


EmployeeInfo.prototype.netsalary = function (level) {

    let min;
    let max;
    if (level=="Senior") {
     min=1500;
     max=2000;


 }else if(level=="Mid-Senior"){
     min=1000;
     max=1500;
 }
 else if (level=="Junior"){
     min=500;
     max=1000;

 }
  let rangeSalary =Math.floor(Math.random() * (max - min)) + min
  let finalSalary=rangeSalary-(rangeSalary*0.075)
  return finalSalary;


}

EmployeeInfo.prototype.uniqueIdNumber = function(){
    this.employeeID= id+id2;
    id++;
}
let form = document.getElementById("form");
form.addEventListener("submit",submitHandler);


function submitHandler (event){
    event.preventDefault();

    let Name = event.target.fullName.value;
    let Department=event.target.department.value;
    let level=event.target.Level.value;
    let Emage=event.target.img.value;
    console.log(Name,Emage,Department,level);
    let newCard = new EmployeeInfo(Name,Department,level, Emage);

    newCard.uniqueIdNumber();
    newCard.netsalary();
    newCard.render();
    saveData(allEmployees);
    
    // let str=JSON.stringify(allEmployees);
    // localStorage.setItem('emp',str);
    // newCard.render();


    // let imagEl=document.createElement('img')
    // imagEl.src=Emage;
    // imagEl.style="width:2px";
    // let parrEl=document.createElement('p') 
    // parrEl.textContent=` Name: ${Name}`
    // let parr2El=document.createElement('p')
    // parr2El.textContent=`Departement: ${Department} - Level: ${level}`;


    // section.appendChild(imagEl);
    // section.appendChild(parrEl);
    // section.appendChild(parr2El);
    calling(allEmployees);


}
let section=document.getElementById('sec1')
EmployeeInfo.prototype.render = function () {

    let imgEl=document.createElement('img')
    imgEl.src=this.image;
    imgEl.width='30'
    let parEl=document.createElement('p') 
    parEl.textContent=` Name: ${this.fullName} - ID: ${this.employeeID}`
    let paEl=document.createElement('p')
    paEl.textContent=`Departement: ${this.department} - Level: ${this.level}`
    let pEl=document.createElement('p')
    pEl.textContent= ` salary : ${this.salary}`
    
    section.appendChild(imgEl);
    section.appendChild(parEl);
    section.appendChild(paEl);
    section.appendChild(pEl);
    




}



let Ghazi = new EmployeeInfo("Ghazi Samer", "Administration", "Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true");
let Lana = new EmployeeInfo("Lana Ali", "Finance", "Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Lana.jpg?raw=true");
let Tamara = new EmployeeInfo("Tamara Ayoub", "Marketing", "Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true");
let Safi = new EmployeeInfo("Safi Walid", "Administration", "Mid-Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Safi.jpg?raw=true");
let Omar = new EmployeeInfo("Omar Zaid", "Development", "Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Omar.jpg?raw=true");
let Rana = new EmployeeInfo("Rana Saleh", "Development", "Junior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Rana.jpg?raw=true");
let Hadi = new EmployeeInfo("Hadi Ahmad", "Finance", "Mid-Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true");

function saveData(data){
    let str=JSON.stringify(data);
    console.log('hii')
    localStorage.setItem("emp",str);
    
}

function getdata(){
    // let get=localStorage.getItem('emp');
    // let objarr=JSON.parse(get);
    // for(let i=0;i<objarr.length;i++){
    //     new EmployeeInfo=(objarr[i].fullName,objarr[i].Department,objarr[i].Level,objarr[i].image)
    //     objarr[i].render()
    // }

    let jsonArr = localStorage.getItem("emp");
    allEmployees = JSON.parse(jsonArr);

  if (allEmployees !== null) {

      for (let i = 0; i < allEmployees.length; i++) {
      new EmployeeInfo(allEmployees[i].fullName, allEmployees[i].department, allEmployees[i].level, allEmployees[i].image)
      
    }
    console.log(newEmployee);
  //  newEmployee.render()
  
  calling(allEmployees);

  }
  }
  getdata();

  calling(allEmployees);
function calling(allEmployees) {
    for (let i = 0; i < allEmployees.length; i++) {
        console.log(allEmployees[i])
        //allEmployees[i].netsalary( allEmployees[i].level);
        //allEmployees[i].uniqueIdNumber();
        allEmployees[i].render();

    }
}
