//ask about and create a new project
function askNewProject(){
var ui = DocumentApp.getUi();
  var response = ui.prompt("What is the name of your project?", 
                          "Please be aware that if you proceed, the scratchpad text will be cleared. Cancel and save your text if needed. ",
                          ui.ButtonSet.OK_CANCEL);
   if (response.getSelectedButton() == ui.Button.OK) {
       var createdProject = createNewProject(response.getResponseText());
     Logger.log(createdProject);
     clearDoc(DocumentApp.getActiveDocument().getId());

       setActiveProject(createdProject);
       //openMainBar(); // commented out because setActiveProject refreshes the bar.
          insertChapterWelcome();
   }
  
};

function loadProject(folderid){
  var ui = DocumentApp.getUi();
  var response = ui.alert("Please be aware that if you proceed, the scratchpad text will be cleared.");
  if (response == ui.Button.OK) {
  Logger.log('The user clicked "Ok."');
    
    clearDoc(DocumentApp.getActiveDocument().getId());
    setActiveProject(folderid);
    insertChapterWelcome();
    
    
}
  
  
};

function askAuthorName(){
  var ui = DocumentApp.getUi();
  var response = ui.prompt("What is your pen name?");
   if (response.getSelectedButton() == ui.Button.OK) {
       setAuthorName(response.getResponseText());
     openMainBar();
   }
  
};

function askNewChapter(){
 var ui = DocumentApp.getUi();
  var response = ui.prompt("What would you like to name your new chapter?");
   if (response.getSelectedButton() == ui.Button.OK) {
     //create doc
       var createdDoc = createDoc(response.getResponseText(), GET_ACTIVE_PROJECT_ID());
     //register as active chapter
     return createdDoc;   
   } else {
     return false;
   }
};

function askSaveChapter(){
    var ui = DocumentApp.getUi();

  var response = ui.alert("Have you saved your scratchpad text? It will be be erased.",
                          "Please click YES to proceed with your action, or click NO to cancel. ", 
      ui.ButtonSet.YES_NO);
  
   if (response == ui.Button.YES) {
    return true;
   } else if(response == ui.Button.NO) {
    return false;
   } else{
     return false;
   }
  
};

function askCorrectLocation(){
   var ui = DocumentApp.getUi();

  var response = ui.alert("You are about to save this scratchpad's contents to " + GET_ACTIVE_CHAPTER_NAME() + ".",
                          "Please click YES to proceed with your action, or click NO to cancel. ", 
      ui.ButtonSet.YES_NO);
  
   if (response == ui.Button.YES) {
    return true;
   } else if(response == ui.Button.NO) {
    return false;
   } else{
     return false;
   }
  
};

function askArchive(){
  var ui = DocumentApp.getUi();
  var response = ui.alert("Do you really want to archive that?", ui.ButtonSet.YES_NO);
  if (response == ui.Button.YES) {
    return true;
   } else if(response == ui.Button.NO) {
    return false;
   } else{
     return false;
   }
};