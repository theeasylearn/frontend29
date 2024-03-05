//arrow function
let $ = (Tagid) => document.getElementById(Tagid);
// function getId(Tagid)
// {
//     return document.getElementById(Tagid);
// }
function val(TagId,text=null)
{
    if(text === null)
        return $(TagId).value;
    else 
        $(TagId).value = text;
}