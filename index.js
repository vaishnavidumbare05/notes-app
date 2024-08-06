const notes=[];

function loadFromLocalStorage(){
    const allNotes=JSON.parse(localStorage.getItem('all notes'));

    if(allNotes){
        //(...allnotes) it means spread item that can use for  remove bracket of array
        notes.push(...allNotes)
    }
    loadNotes();
}
loadFromLocalStorage();

function loadNotes(){
    localStorage.setItem('all notes',JSON.stringify(notes));
    const notesContainer=document.getElementById("notes-container")
    notesContainer.innerHTML=' '
    for(const note of notes){
        notesContainer.innerHTML+=
        `<div class="to-do-item">
           ${note} 
           <button class="btn-delete" type=button onclick="deleteNote('${note}')">Delete</button>
            </div>`
    }
}


function deleteNote(note){
    const noteIndex=notes.indexOf(note);
    notes.splice(noteIndex,1);
    loadNotes();

}

function addNote(){
    const noteInputElement=document.getElementById('note-input');
    const note=noteInputElement.value;

    if(!note){
        alert('Please enter a note');
        return;
    }
    notes.push(note);
    loadNotes();

    noteInputElement.value=' ';
}
