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
    //const studentMarks = getstudentMarks();
    if(marks > 79){
        console.log("Grade A");
    }else if (marks >= 60 && marks <= 79){
        console.log("Grade B");
    }else if (marks > 49 && marks <= 59){
        console.log("Grade C");
    }else if (marks >=40 && marks <= 49){
        console.log("Grade D");
    }else{
        console.log("Grade E");
    }
}

