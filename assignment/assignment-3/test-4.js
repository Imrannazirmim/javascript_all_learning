/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here

if (fileName.includes("#", 0)) {
  console.log("Store");
} else if (
  fileName.includes(".pdf") ||
  fileName.includes(".docx") 
) {
  console.log("Store");
}else{
    console.log('Delete');
    
}
