# Wk1-Code-Challenge

This is a code challenge for week 1 of the software engineering phase 1 at Moringa school.
There are three challenges and each solution should be written in javaScript and each file contains one solution to the challenges.
The getStudentMarks function is designed to prompt the user to enter a student's marks and then determine the corresponding grade based on the marks.
The speedDetector function is designed to take the speed of a car as input and returns "ok" if speed limit is below 70 and gives demerit points if speed is above the speed limit.
The taxCalculator function calculates the net pay of an employee based on their gross salary, taking into account PAYE, NHIF, and NSSF deductions.

        getStudentMarks Function

The getStudentMarks function prompts the user to enter a student's marks. It then checks if the entered marks are valid (i.e., a number between 0 and 100). If the marks are invalid, it displays an error message and prompts the user to enter the marks again. Once valid marks are entered, the function returns the marks and determines the corresponding grade based on the following criteria:

Grade A: 80-100
Grade B: 60-79
Grade C: 49-59
Grade D: 40-48
Grade E: Below 40

        speedDetector Function
The speedDetector Function prompts the user to enter the speed of a car as input. It then checks to see if the speed is less than or more than the speed limit,which is 70.If the speed is less than or equal to the speed limit,the function returns "Ok".
If the speed is more than the speed limit,the function gives the driver 1 demerit point for every 5km/s that the speed is above the speed limit.If the points are more than 12,the function returns "License Suspended".

        taxCalculator Function

The taxCalculator function prompts the user to enter their gross salary. It then calculates the PAYE, NHIF, and NSSF deductions based on the gross salary. The deductions are calculated as follows:

PAYE:
10% of gross salary if gross salary is less than or equal to 24,000
25% of gross salary if gross salary is between 24,001 and 32,333
30% of gross salary if gross salary is above 32,333
NHIF: Based on the gross salary, with different rates for different salary ranges
NSSF: 6% of monthly limit.
The function then calculates the total deductions by adding the PAYE, NHIF, and NSSF deductions. Finally, it calculates the net pay by subtracting the total deductions from the gross salary.