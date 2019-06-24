//var FSO, file, r;
//var ForReading = 1, ForWriting = 2;
//FSO = new ActiveXObject("Scripting.FileSystemObject");
//file = FSO.OpenTextFile("views.txt", ForReading);
//r = file.ReadLine();
//file.Close();
//file = FSO.OpenTextFile("views.txt", ForWriting, true);
//file.Write(r +"|");
//file.Close();


var file = fopen("views.txt", 3); // Open the file for writing

if(fh!=-1) // If the file has been successfully opened
{
    var str = "!";
    fwrite(file, str); // Write the string to a file
    fclose(file); // Close the file 
}