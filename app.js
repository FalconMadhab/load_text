/*function readFile(){
	window.open()
	jQuery.get('aloo.txt',function(txt){
		$('#output').text(txt)
	});
}*/
/*function loadworddoc(){

  var doc = new ActiveXObject("Word.Application"); // creates the word object

  doc.Visible=false; // doesn't display Word window

  doc.Documents.Open("C:\\Users\\mayowa\\Videos\\portfolio\\gb.docx"); // specify path to document

               

  //copy the content from my word document and throw it into my variable

  var txt;

  txt = doc.Documents("C:\\Users\\mayowa\\Videos\\portfolio\\gb.docx").Content; 

  document.all.myarea.value = txt;

  doc.quit(0); // quit word (very important or you'll quickly chew up memory!)

}*/
/*function OpenWord() {
                 
                var mylink = document.getElementById("MyLink");
                mylink.setAttribute("href", "gb.docx");
                mylink.click();

            }
*/
function load_file(file, element) {
	$(element).load(file);
}
/*function openWord(strFilePath) {
        var yourSite = "http://localhost:8000/";
        openWordDocPath(yourSite + strFilePath);
    }
    function openWordDocPath(strLocation) {
        var objWord;
        objWord = new ActiveXObject("Word.Application");
        objWord.Visible = true;
        objWord.Documents.Open(strLocation);
    }*/