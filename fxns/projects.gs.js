//create a new project folder in Spooke
function createNewProject(name){
  
  //create new folder
  var myFolderID = createFolder(APP_NAME, name);
  
  return myFolderID;
}

/**** project setters  ***/
function setActiveProject(id){
  //set ids
  Logger.log(id);
   PropertiesService.getUserProperties().setProperty('ActiveProject', id);
   PropertiesService.getUserProperties().setProperty('ActiveProjectName', DriveApp.getFolderById(id));
  //remove current chapter
  PropertiesService.getUserProperties().deleteProperty('ActiveChapter');
  PropertiesService.getUserProperties().deleteProperty('ActiveChapterName');
  //refresh app
  openMainBar();
};


function archiveFolder(folderid) {
  var shallWeProceed = askArchive();
  
  if(shallWeProceed){
  var targetFolder = DriveApp.getFolderById(GET_ARCHIVE_ID());
  var sourceFolder = DriveApp.getFolderById(folderid);
  var currentFolders = sourceFolder.getParents();
  while (currentFolders.hasNext()) {
    var currentFolder = currentFolders.next();
    currentFolder.removeFolder(sourceFolder);
  }
  targetFolder.addFolder(sourceFolder);
  }
  //reload the page
  openMainBar();
};

