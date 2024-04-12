//Start a new get request to run the server in the backend
const myRequest = new Request('http://localhost:3000/patients');

//Capture the html ids for manupulation 
const formOne = document.getElementById("formOne");
const searchPatientId = document.getElementById("search-patient-id");
const searchButton = document.getElementById("search-button");
const newPatientButton = document.getElementById("new-patient-button");
const newPatientToogler = document.getElementById("new-patient-toogler");
const formTwo = document.getElementById("formTwo");
const saveButton = document.getElementById("save-button");



//Taking user input for the search button 
    searchButton.addEventListener('click', () => {
        const searchPatientName = document.getElementById('search-patient-name').value;
        
        if (searchPatientName.trim() !== '') {
            fetch('http://localhost:3000/patients').then(
            response => response.json()
            ).then(data => {
                var patient = data.find(patient => patient.name === searchPatientName);
                
                if (patient) {
                    document.getElementById('patient-notes').value = patient.notes;
                } else {
                    alert('patient not found');
                }
            });
        }
    });

//Taking user input from the new patient form and sending it to the server using post
formTwo.addEventListener('submit', event => {
    event.preventDefault();
    //Capture all form entries and store in a variable
    const newPatientName = document.getElementById("newPatientName").value;
    const newPatientId = document.getElementById("new-patient-id").value;
    const patientGender = document.getElementById("patient-gender").value;
    const patientAge = document.getElementById("patient-age").value;
    const patientNotes = document.getElementById("patient-notes").value;

   fetch('http://localhost:3000/patients', {
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(
              {
            name: newPatientName,
            identity: newPatientId,
            age: patientAge,
            gender:patientGender,
            notes:patientNotes,
        })       
    })
    .then((response) => response.json())
    .then(data => console.log(data))
}); 

//To display the new patient form
newPatientButton.addEventListener('click', () => {
    if (newPatientToogler.style.display === "none") {
        newPatientToogler.style.display ="block";
    }
    else {
        newPatientToogler.style.display = "none";
    }
});

//declaring variables for the update form 
const updatePatientButton = document.getElementById("update-button");
const updatePatientToogler = document.getElementById("update-patient-toogler");



//To display the update patient form
updatePatientButton.addEventListener('click', () => {
    if (updatePatientToogler.style.display === "none") {
        updatePatientToogler.style.display ="block";
    }
    else {
        updatePatientToogler.style.display = "none";
    }
});

const updateSearchButton = document.getElementById("update-search-button");

//Taking user input for the search and update button 
updateSearchButton.addEventListener('click', () => {
    const updatePatientName = document.getElementById('update-patient-name').value;
    
    
    if (updatePatientName.trim() !== '') {
        fetch('http://localhost:3000/patients').then(
        response => response.json()
        ).then(data => {
            var patientData = data.find(patientData => patientData.name === updatePatientName);
            
            if (patientData) {
                document.getElementById('update-patient-notes').value = patientData.notes;
            } else {
                alert('patient not found');
            }
        });
    }
}); 


//saving the changes made to the update 
const updateForm = document.getElementById("update-form");

updateForm.addEventListener('click', event => {
    event.preventDefault();

    const updatedName = document.getElementById("update-patient-name").value;
    const updatedAge = document.getElementById("update-patient-age").value;
    const updateGender = document.getElementById("update-patient-gender").value;
    const updatedId = document.getElementById("update-patient-id").value;
    const updatedNotes = document.getElementById("update-patient-notes").value;

    fetch('http://localhost:3000/patients', {
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(
              {
            name: updatedName,
            identity: updatedAge,
            age: updatedId,
            gender:updateGender,
            notes:updatedNotes,
        })       
    })
    .then((response) => response.json())
    .then(data => console.log(data))
}); 
