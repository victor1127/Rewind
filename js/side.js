function ReverseString()
{
    //get initial string
    let word = document.getElementById("tboxreverse").value;
    let newWord = "";

    for (let index = word.length - 1; index >= 0; index--)
    {
        newWord += word[index];
    }
    

}
