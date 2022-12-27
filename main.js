let date=new Date();
let gettime=parseInt(prompt("Enter the time"));
let newTime=date.setTime(gettime);
if(newTime<=11 && newTime>=5)
{
    document.write("Morning");
}
else if(newTime<=16 && newTime>=12)
{
    document.write("Afternoon");
}
else if(newTime<=19 && newTime>=17)
{
    document.write("Evening");
}
else{
    document.write("Night");
}