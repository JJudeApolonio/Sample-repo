/*Create a new JavaScript file named classSubject.js.

Collect the following user information with the use of prompt():
Subject Title: DSA:
Subject Schedule(Time, Days): 9:00 - 10:00 AM, MTWTHF
Classroom: Ched 124
Class Instructor: Sir Owen Pascua
Student Name: Justine Jude
Use these variables to store this information and log it to the console following the string
"{Student Name} is currently enrolled in {Subject Title} with a class schedule of {Class Schedule} at room {Classroom}. The instructor for the subject is {Class Instructor"}
*/

let subjectTitle = prompt("Enter the Subject Title:");
let subjectSchedule = prompt("Enter the Class Schedule(Time, Days:");
let classRoom = prompt("Enter the Classroom:");
let classInstructor = prompt("Enter the Class Instructor:");
let studentName = prompt("Enter the Student Name:");

//Log the collected information to the console

console.log(`${studentName}is currenly enrolled in ${subjectTitle} with a class schedule in $ {classSchedule} at room $ {classroom}. The instructor for the subject is ${classInstructor}.`);
