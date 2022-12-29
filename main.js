function elementId()
{
    alert('Hi all');
}

function elementid()
{
    let x=document.getElementById('idelement');
    alert(x.innerText);
}
function elementclass()
 {
    let y=document.getElementsByClassName('classelement');  
    alert(y[0].innerText);
}
function ename()
{
    let z=document.getElementsByName('fname');
    alert(z[0].tagName);
}
function tagname()
{
    let a=document.getElementsByTagName('span');
    alert(a[0].innerText);
}