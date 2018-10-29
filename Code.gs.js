/***************************
START AND TEST FUNCTIONS
***************************/

function onInstall(e){
  start();
  onOpen(e);
};


function onOpen(e){
  // Add a custom menu to the spreadsheet.
  //start()
  DocumentApp.getUi() // Or DocumentApp, SlidesApp, or FormApp.
      .createMenu(APP_NAME)
  .addItem('Open Sidebar', 'openMainBar')
      .addToUi();
};

function start(){
  //createFolder returns the ID of your folder. 
  //If it already exists, it doesn't get recreated.
  
  //make the default app folder. 
  //If we change the app name, a new folder gets created.
  var myFolderID = createFolder('', APP_NAME);

  //make the default project folder
  //This is set in proj_constants to Moby Dick, but we can change
  //when we actually import some content.
  var defaultProject = createFolder(APP_NAME, DEFAULT_PROJECT);
  
  //make the Archive folder. This is to clear out old projects.
  var myArchive = createFolder(APP_NAME, 'Archive');
  
//Let's register these folders in our user properties so we can retrieve them easily.
  PropertiesService.getUserProperties().setProperty('AppFolder', myFolderID);  
  //error checking
  Logger.log("My AppFolder is: " + PropertiesService.getUserProperties().getProperty('AppFolder')); 
  
//We need a default project for folks, so it gets set to Active Project
  PropertiesService.getUserProperties().setProperty('ActiveProject', defaultProject);
  //error checking
  Logger.log("My ActiveProject is: " + PropertiesService.getUserProperties().getProperty('ActiveProject'));  

  //Let's also set the Archive folder for easy retrieval.
  PropertiesService.getUserProperties().setProperty('ArchiveFolder', myArchive);
  Logger.log("My ArchiveFolder is: " + PropertiesService.getUserProperties().getProperty('ArchiveFolder'));
  
  //and set the default author name
  setAuthorName('Herman Melville');
};



function newProject(){
  createNewProject('Twilight');
}

function openMainBar(){
  var template = HtmlService.createTemplateFromFile('views/index').evaluate().setTitle(APP_NAME);
  DocumentApp.getUi().showSidebar(template);
}