function getstudentMarks(){
    let marks;
    while(true){
        marks = parseInt(prompt("Enter student marks"));
        if(isNaN(marks) || marks < 0 || marks > 100 ){
            alert("Enter valid marks");
        }else{
            break;
        }
    }
    return marks;
}

const studentMarks = getstudentMarks();
if(studentMarks > 79){
    console.log("Grade A");
}else if (studentMarks >= 60 && studentMarks <= 79){
    console.log("Grade B");
}else if (studentMarks >= 49 && studentMarks <= 59){
    console.log("Grade C");
}else if (studentMarks >=40 && studentMarks >= 49){
    console.log("Grade D");
}else{
    console.log("Grade E");
}