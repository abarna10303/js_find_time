let date=new Date();
let gettime=parseInt(prompt("Enter the time"));
let newTime=date.setTime(gettime);
if(newTime<12 && newTime>=5)
{
    document.write("Morning");
}
else if(newTime<16 && newTime>=12)
{
    document.write("Afternoon");
}
else if(newTime<=19 && newTime>=16)
{
    document.write("Evening");
}
else if(newTime<=24 && newTime>=20||newTime<5){
    document.write("Night");
}
else{
    document.write("Please Enter the Correct Time")
}