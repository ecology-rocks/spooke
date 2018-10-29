var APP_NAME = 'Spooke';
var DEFAULT_PROJECT = 'Moby Dick';



function STILL_DEV() {
  DocumentApp.getUi().alert("Sorry, this feature is still in development.");
}



function setActiveChapter(id){
  PropertiesService.getUserProperties().setProperty('ActiveChapter', id);
  PropertiesService.getUserProperties().setProperty('ActiveChapterName', DriveApp.getFileById(id));
  Logger.log("Your active chapter is: " + GET_ACTIVE_CHAPTER_NAME() + " with id: " + GET_ACTIVE_CHAPTER_ID());
};

function setAuthorName(val){
  PropertiesService.getUserProperties().setProperty('AuthorName', val);
  Logger.log(GET_AUTHOR_NAME());
};


function testap(){
  var curproj = GET_ACTIVE_PROJECT_ID();
  Logger.log(curproj);
  //PropertiesService.getUserProperties().setProperty('ActiveProjectName', DriveApp.getFolderById(id));
};


function GET_ACTIVE_PROJECT_NAME(){
  //var projectname = DriveApp.getFolderById(GET_ACTIVE_PROJECT_ID()).getName();
  var projectname =  PropertiesService.getUserProperties().getProperty('ActiveProjectName');
  Logger.log(projectname);
  return(projectname);
}

function GET_ACTIVE_PROJECT_ID(){
 return PropertiesService.getUserProperties().getProperty('ActiveProject'); 
}

function GET_APPFOLDER_ID(){
  return PropertiesService.getUserProperties().getProperty('AppFolder');
};

function GET_ARCHIVE_ID(){
  return PropertiesService.getUserProperties().getProperty('ArchiveFolder'); 
};

function GET_AUTHOR_NAME(){
    return PropertiesService.getUserProperties().getProperty('AuthorName'); 
};

function GET_ACTIVE_CHAPTER_ID(){
    return PropertiesService.getUserProperties().getProperty('ActiveChapter');
};

function GET_ACTIVE_CHAPTER_NAME(){
    return PropertiesService.getUserProperties().getProperty('ActiveChapterName');
};