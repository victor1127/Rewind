function GetValue()
{
    let word = document.getElementById("tboxreverse").value;
    let reversedWord = ReverseString(word);
    DisplayValue(reversedWord);

}

function ReverseString(word)
{
    let newWord = "";
    for (let index = word.length - 1; index >= 0; index--)
    {
        newWord += word[index];
    }
    return newWord;
}

function DisplayValue(word)
{
    document.getElementById("msg").innerHTML = word;
    document.getElementById("alert").classList.remove("invisible");
}
