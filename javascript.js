var flag=0
var c=0
function digit(a)
{
    var x=document.getElementById("inp1");
    if(flag==1)
    {
        x.value="";
        flag=0;
    }
    if(flag==2)
    {
        clear_msg()
        flag=0;
    } 
    if (x.value!="" || a!=0)
    {
        x.value=x.value+a;
    }
}

function clear_msg()
{
    var x=document.getElementById("inp1");
    var p=document.getElementById("prev");
    x.value="";
    p.value="";
}

function operation(op){
    var x=document.getElementById("inp1");
    var p=document.getElementById("prev");
    p.value=x.value+op
    flag=1
    c=0
}
function equalto()
{
    var p=document.getElementById("prev")
    var x=document.getElementById("inp1");
    p.value=p.value+x.value
    x.value=eval(p.value)
    p.value=p.value+"="
    flag=2
    c=0
}
function point()
{
    if(flag==2)
    {
        clear_msg()
        flag=0;
    } 
    if (c==0)
    {
        var x=document.getElementById("inp1");
        if (x.value=="")
        {
            x.value=0
        }
        x.value=x.value+".";
        c=1
    }

}
function BSpace()
{
    var x=document.getElementById("inp1");
    x.value=x.value.substring(0,x.value.length-1);
}