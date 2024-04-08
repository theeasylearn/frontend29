//example of local module
function getCurrentDate()
{
    //return current date
    //create date class object
    let date = new Date();
    let day = date.getDate(); //return day of the month
    let month = date.getMonth() + 1;
    let year = date.getFullYear(); 
    let currentdate = day + "-" + month + "-" + year;
    return currentdate;
}
function getCurrentTime()
{
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let currenttime = hour + ":" + minute + ":" + seconds;
    return currenttime;
}
//export function
module.exports.getDate = getCurrentDate;
module.exports.getTime = getCurrentTime;