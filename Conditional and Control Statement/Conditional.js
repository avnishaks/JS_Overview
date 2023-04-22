 var  expense=140;
 var texpense=140;

 if(expense>100){
    console.log("Extra expense is", texpense-100);
 }
 else{
    console.log("Not enough money");
 }

 // else if statement
 /*
 90-100 - A grade
 70-89 - B grade
 50-69 - C grade
 lower than 50- D grade
 */

 var studentscore=90;

 if(studentscore<=100&&studentscore>=90){
    console.log("A grade");
 }
 else if(studentscore<=89&&studentscore>=70){
    console.log("B grade");
 }
 else if(studentscore<=69&&studentscore>=50){
    console.log("C grade");
 }
 else{
    console.log("D grade");
 }
