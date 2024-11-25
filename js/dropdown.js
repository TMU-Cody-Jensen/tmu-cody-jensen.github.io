


//on selected item, toggle cal, and call getCal
//go button toggles div that is also hidden


function getCal() { 
    var input = document.getElementById("iam").innerHTML; 
    var studentCal = document.getElementById("calendar-studentsection");
    var applicantCal = document.getElementById("calendar-applicantsection");
    
    var studentOption = document.getElementById("studentOption");
    var applicantOption = document.getElementById("applicantOption");

    if (studentOption.selected) {
        studentCal.style.display = "block";
        applicantCal.style.display = "none";
    }

    if (applicantOption.selected) {
        studentCal.style.display = "none";
        applicantCal.style.display = "block";
    }    
    
}


