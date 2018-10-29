/************************************
FOLDER CREATORS
************************************/


//if parent folder is blank, it defaults to the drive
function createFolder(parentFolder, folderName){
  
  if(parentFolder == ''){ 
    parentFolder = DriveApp; 
  } else {
     parentFolder = DriveApp.getFoldersByName(parentFolder).next();
  }
  
  var subFolders = parentFolder.getFolders();
  var doesntExists = true;
  var newFolder = '';
  
  // Check if folder already exists.
  while(subFolders.hasNext()){
    var folder = subFolders.next();
    
    //If the name exists return the id of the folder
    if(folder.getName() === folderName){
      doesntExists = false;
      newFolder = folder;
      Logger.log(newFolder.getId());
      return newFolder.getId();
    };
  };
  //If the name doesn't exists, then create a new folder
  if(doesntExists = true){
    //If the file doesn't exists
    //this createFolder is from the drive app, not from my creation.
    newFolder = parentFolder.createFolder(folderName);
    Logger.log(newFolder.getId());
    return newFolder.getId();
  };
};

function generateFolderTree() {
  //modified from: https://ctrlq.org/code/19923-google-drive-files-list
  try {
    // If you want a tree of any sub folder
    var parent = DriveApp.getFolderById(GET_APPFOLDER_ID());
      
    var allFolders = getChildFolders(parent);
    
    var noArchive = allFolders.filter(function(folder){
      return folder.id != GET_ARCHIVE_ID();
    });
    
    //can chain additional filters here for characters, notes, etc -- however this app gets built.
    
    Logger.log(noArchive);
    return noArchive;
    
  } catch (e) {
    
    Logger.log(e.toString());
    
  }
  
}



//returns a file iterator
function generateDocTree(folderId) {
    //modified from: https://ctrlq.org/code/19923-google-drive-files-list
  try {
    // If you want a tree of any sub folder
    var parent = DriveApp.getFolderById(folderId);
    var files = parent.getFiles();
    var final = [];
    while (files.hasNext()) {
    var file = files.next();
      final.push({name: file.getName(), id: file.getId(), mime: file.getMimeType().split('.')[2] });
      Logger.log(file.getName() + ": " + file.getId() + " MIME: " + file.getMimeType());
}
    Logger.log(final);
  return final;
  } catch (e) {
    
    Logger.log(e.toString());
    
  }
  
}
  


function getChildFolders(parent) {
  //modified from: https://ctrlq.org/code/19923-google-drive-files-list
  
  var childFolders = parent.getFolders();
  var data = [];
  while (childFolders.hasNext()) { 
    var childFolder = childFolders.next();
    data.push({name: childFolder.getName(), id: childFolder.getId()});
  }
  return(data);
};




