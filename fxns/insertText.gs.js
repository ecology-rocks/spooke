function insertBookWelcome(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  var bookName = body.appendParagraph(GET_ACTIVE_PROJECT_NAME())
                     .setAlignment(DocumentApp.HorizontalAlignment.CENTER)
                     .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  
  var authorName = body.appendParagraph(GET_AUTHOR_NAME())
                     .setAlignment(DocumentApp.HorizontalAlignment.CENTER)
                     .setHeading(DocumentApp.ParagraphHeading.HEADING3);
 
  body.appendHorizontalRule();
  
  body.appendParagraph('Welcome to your book! This is your scratchpad document, and just lets you know that your book has been successfully created or opened. To begin writing, you can do one of two things. ');
  body.appendParagraph('');
  body.appendParagraph('1: You can simply delete this text and begin writing. When you\'re ready to save, click "Save Scratchpad" and enter your chapter title. ');
  body.appendParagraph('');      
  body.appendParagraph('2: You can also use Chapter Menu --> New... to create a chapter. ');
  body.appendParagraph('');      
  body.appendParagraph('Because this app is constrained by Google Docs, you need to save your scratchpad whenever you\'re done, as your chapter will not automatically save in the correct place. Please use the "Save Scratchpad" feature liberally. ');
  
};

function insertChapterWelcome(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  var chapterName = body.appendParagraph(GET_ACTIVE_CHAPTER_NAME())
                     .setAlignment(DocumentApp.HorizontalAlignment.CENTER)
                     .setHeading(DocumentApp.ParagraphHeading.HEADING2);
 
  body.appendHorizontalRule();
  
  body.appendParagraph('Welcome to your chapter! This is your scratchpad document, and just lets you know that your chapter has been successfully created or opened. You can just clear this text to get started! ');
  body.appendParagraph('');
  body.appendParagraph('Because this app is constrained by Google Docs, you need to save your scratchpad whenever you\'re done, as your chapter will not automatically save in the correct place. Please use the "Save Scratchpad" feature liberally. ');
  
};