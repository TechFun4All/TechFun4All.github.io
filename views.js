var FSO, file, r;
var ForReading = 1, ForWriting = 2;
FSO = new ActiveXObject("Scripting.FileSystemObject");
file = FSO.OpenTextFile("views.txt", ForReading);
r = file.ReadLine();
file.Close();
file = FSO.OpenTextFile("views.txt", ForWriting, true);
file.Write(r +"|");
file.Close();