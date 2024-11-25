



function getCal() { 
    var input = document.getElementById("iam").innerHTML; 
    var studentCal = document.getElementById("calendar-studentsection");
    var applicantCal = document.getElementById("calendar-applicantsection");
    
    var studentOption = document.getElementById("studentOption");
    var applicantOption = document.getElementById("applicantOption");

    if (studentOption.selected) {
        studentCal.style.display = "block";
    }

    if (applicantOption.selected) {
        applicantcal.style.display = "block";
    }

    
    
}


