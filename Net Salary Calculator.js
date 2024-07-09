function taxCalculator(){
    //initialization of variables
    let grossSalary = parseInt(prompt("Enter Gross Salary:"));
    let netPay = 0;
    let PAYE = 0;
    let NHIF = 0;
    let NSSF = 0;
    let personalRelief = 2400;
    let totalDeductions = 0;


// PAYE calculation
    if(grossSalary <= 24000){
        PAYE = (grossSalary  * 0.1) - personalRelief;
    }else if(grossSalary >24000 && grossSalary <= 32333){
        PAYE = (grossSalary * 0.25) - personalRelief;
    }else{
        PAYE = (grossSalary * 0.3) - personalRelief;
    }


//NHIF deduction calculation
    if(grossSalary < 5999){
        NHIF = 150;
    }else if(grossSalary >= 6000 && grossSalary <= 7999){
        NHIF = 300;
    }else if(grossSalary >=8000 && grossSalary <= 11999){
        NHIF = 400;
    }else if(grossSalary >= 12000 && grossSalary <= 14999){
        NHIF = 500;
    }else if(grossSalary >= 15000 && grossSalary <= 19999){
        NHIF = 600;
    }else if(grossSalary >= 20000 && grossSalary <= 24999){
        NHIF = 750;
    }else if(grossSalary >= 25000 && grossSalary <= 29999){
        NHIF = 850;
    }else if(grossSalary >= 30000 && grossSalary <= 34999){
        NHIF = 900;
    }else if(grossSalary >= 35000 && grossSalary <= 39999){
        NHIF = 950;
    }else if(grossSalary >= 40000 && grossSalary <= 44999){
        NHIF = 1000;
    }else if(grossSalary >= 45000 && grossSalary <= 49999){
        NHIF = 1100;
    }else if(grossSalary >= 50000 && grossSalary <= 59999){
        NHIF = 1200;
    }else if(grossSalary >= 60000 && grossSalary <= 69999){
        NHIF = 1300;
    }else if(grossSalary >= 70000 && grossSalary <= 79999){
        NHIF = 1400;
    }else if(grossSalary >= 80000 && grossSalary <= 89999){
        NHIF = 1500;
    }else if(grossSalary >= 90000 && grossSalary <= 99999){
        NHIF = 1600;
    }else {
        NHIF = 1700;
    }


// NSSF deduction calculation
    NSSF = 7000 * 0.06;

// Total deduction and Net pay Calculation
    totalDeductions = PAYE + NHIF + NSSF;
    netPay = grossSalary - totalDeductions;

    console.log("Gross Salary:", grossSalary);
    console.log("PAYE:", PAYE);
    console.log("NHIF:", NHIF);
    console.log("NSSF:", NSSF);
    console.log("Total Deductions:", totalDeductions);
    console.log("Net Pay:", netPay);
}

taxCalculator();