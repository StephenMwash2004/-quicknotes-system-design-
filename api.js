const API_URL =
"https://jsonplaceholder.typicode.com/posts";


const loadBtn = document.getElementById("load-btn");
const status = document.getElementById("status");
const notesList = document.getElementById("notes-list");

const form = document.getElementById("note-form");
const titleInput = document.getElementById("title-input");
const bodyInput = document.getElementById("body-input");
const submitBtn = document.getElementById("submit-btn");

async function request(url, options = {}) {

    const response = await fetch(url, options);


    if(!response.ok){

        throw new Error(
            `Request failed: ${response.status}`
        );

    }


    return response.json();

}


async function loadNotes(){

    loadBtn.disabled = true;

    status.textContent = "Loading notes...";


    try{

        notesList.innerHTML="";


        const notes =
        await request(
            API_URL + "?_limit=10"
        );


        if(notes.length === 0){

            notesList.textContent =
            "No notes available.";

            return;

        }


        notes.forEach(displayNote);


        status.textContent =
        "Loaded 10 notes from the server.";

    }


    catch(error){

        status.textContent =
        "Unable to load notes. Please try again.";

    }


    finally{

        loadBtn.disabled=false;

    }

}


loadBtn.addEventListener(
    "click",
    loadNotes
);


form.addEventListener(
"submit",
async function(event){


event.preventDefault();


const title =
titleInput.value.trim();


const body =
bodyInput.value.trim();



if(title === ""){

status.textContent =
"Title is required.";

return;

}


if(title.length > 100){

status.textContent =
"Title must be below 100 characters.";

return;

}


submitBtn.disabled=true;


try{


const response =
await fetch(API_URL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},


body:JSON.stringify({

title:title,

body:body,

userId:1

})


});


const created =
await response.json();


displayNote(created);


status.textContent =
`Note created (status ${response.status}, id ${created.id}).`;



form.reset();


}


catch(error){

status.textContent =
"Could not create note.";

}


finally{

submitBtn.disabled=false;

}


});



async function deleteNote(id, element){


try{


const response =
await fetch(
`${API_URL}/${id}`,
{
method:"DELETE"
}
);



if(!response.ok){

throw new Error();

}



element.remove();


status.textContent =
"Note deleted successfully.";



/*
JSONPlaceholder does not permanently store data.
DELETE only returns a successful response.
The UI removes the note locally to simulate deletion.
*/


}


catch(error){

status.textContent =
"Unable to delete note.";

}



}


