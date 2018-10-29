function importInDoc(documentid) {
  
  
  //source URLS: //https://stackoverflow.com/questions/19987101/how-to-copy-content-and-formatting-between-google-docs
//https://stackoverflow.com/questions/19894885/how-to-copy-one-or-more-existing-pages-of-a-document-using-google-apps-script/19907943#19907943
  
  //source document for copying
  var sourceDoc = DocumentApp.openById(documentid).getBody();
  
  //get this document
  var targetDoc = DocumentApp.getActiveDocument();

  var totalElements = sourceDoc.getNumChildren();

  for( var j = 0; j < totalElements; ++j ) {
    var body = targetDoc.getBody()
    var element = sourceDoc.getChild(j).copy();
    var type = element.getType();
    if( type == DocumentApp.ElementType.PARAGRAPH ){
      body.appendParagraph(element);
    }
    else if( type == DocumentApp.ElementType.TABLE){
      body.appendTable(element);
      }
    else if( type == DocumentApp.ElementType.LIST_ITEM){
      body.appendListItem(element);
      }
//    ...add other conditions (headers, footers...
    }
  targetDoc.saveAndClose();
}




function exportToDoc(documentid) {

  //source URLS: //https://stackoverflow.com/questions/19987101/how-to-copy-content-and-formatting-between-google-docs
//https://stackoverflow.com/questions/19894885/how-to-copy-one-or-more-existing-pages-of-a-document-using-google-apps-script/19907943#19907943
  
  //source document for copying
  var sourceDoc = DocumentApp.getActiveDocument().getBody();
  
  //clear the document
  clearDoc(documentid);
  
  //get the body
  var targetDoc = DocumentApp.openById(documentid);

  var totalElements = sourceDoc.getNumChildren();

  for( var j = 0; j < totalElements; ++j ) {
    var body = targetDoc.getBody()
    var element = sourceDoc.getChild(j).copy();
    var type = element.getType();
    if( type == DocumentApp.ElementType.PARAGRAPH ){
      body.appendParagraph(element);
    }
    else if( type == DocumentApp.ElementType.TABLE){
      body.appendTable(element);
      }
    else if( type == DocumentApp.ElementType.LIST_ITEM){
      body.appendListItem(element);
      }
//    ...add other conditions (headers, footers...
    }
  targetDoc.saveAndClose();
}



function clearDoc(documentid){ 
  Logger.log(documentid);
  if(documentid==''){
    documentid = DocumentApp.getActiveDocument().getId();
  }
  var doc = DocumentApp.openById(documentid); 
  doc.setText(' '); 
}




function deleteDoc(documentid){
   DriveApp.getFileById(documentid).setTrashed(true);
}




function createDoc(docname, folderid){
   var doc = DocumentApp.create(docname);
   var docFile = DriveApp.getFileById(doc.getId());
   DriveApp.getFolderById(folderid).addFile(docFile);
   DriveApp.getRootFolder().removeFile(docFile);
  return doc.getId();
}




function loadChapter(documentid){
  //save current chapter if there's a chapter set as active
  var shallWeProceed = askSaveChapter();
  
  //clear doc
  if(shallWeProceed){
    clearDoc(DocumentApp.getActiveDocument().getId());
    importInDoc(documentid);
    setActiveChapter(documentid);
    openMainBar();
  }
};




function createChapter(){
  //ask if saved
  var shallWeProceed = askSaveChapter();
  
  if(shallWeProceed){
    //get and create new chapter
    var createdChapter = askNewChapter();

    clearDoc(DocumentApp.getActiveDocument().getId());
    setActiveChapter(createdChapter);
    insertChapterWelcome();
    openMainBar();
  };
  
};





function saveChapter(){

  var activeChapter = GET_ACTIVE_CHAPTER_ID();
  if(activeChapter){
  var shallWeProceed = askCorrectLocation();
  if(shallWeProceed){
    //export to saved location
    //DocumentApp.getUi().alert(GET_ACTIVE_CHAPTER_ID());
    exportToDoc(GET_ACTIVE_CHAPTER_ID());
    //success message
    DocumentApp.getUi().alert("Your chapter has been saved.");
    
  }; // end shall we proceed
  }//end active chapter exists
  else {
    //prompt to save to new document
    var chapterid = askNewChapter(); //returns false if someone backs out, otherwise returns id
    if(chapterid){
    exportToDoc(chapterid);
    DocumentApp.getUi().alert("Your chapter has been saved.");
      openMainBar(); //refresh because the active chapter has changed
    }
  }
  
};


function archiveDoc(documentid) {
  
  var shallWeProceed = askArchive();
  
  if(shallWeProceed){
    var targetFolder = DriveApp.getFolderById(GET_ARCHIVE_ID());
  var sourceFile = DriveApp.getFileById(documentid);
  var currentFolders = sourceFile.getParents();
  while (currentFolders.hasNext()) {
    var currentFolder = currentFolders.next();
    currentFolder.removeFile(sourceFile);
  }
  targetFolder.addFile(sourceFile);
  }
  //reload the page
  openMainBar();
  
};


