function data()
{
    var height=document.getElementsByClassName("height")[0].value;
    var weight=document.getElementsByClassName("height")[1].value;
    console.log(height,weight)
    localStorage.setItem('myheight', height);
    localStorage.setItem('myweight', weight);
var hei = localStorage.getItem('myheight');
var wei = localStorage.getItem('myweight');
console.log(hei);
console.log(wei);
    hei=hei/100;
    console.log(hei);
    var bm=weight/Math.pow(hei,2);
    localStorage.setItem('mybm',bm);
    var b= localStorage.getItem('mybm');
    console.log(b);
    var status;
    if(document.getElementById("veg").checked==true)
    {
        status="veg";
    }
    else if(document.getElementById("nonveg").checked==true)
    {
        status="nonveg";
    }
    else if(document.getElementById("egg").checked==true)
    {
        status="egg";
    }
    localStorage.setItem('mystatus',status);
    var stat=localStorage.getItem('mystatus');
    console.log(stat);
    var food;
    if(bm<18.5 )
    {
        food="Under-weight";
    }
    else if(bm>=18.5 && bm<=24.9)
    {
        food="Healthy";
    }
    else{
        food="Over-weight";
    }
    localStorage.setItem('myfood',food);
    var foodie=localStorage.getItem('myfood');
    console.log(foodie);
    window.location.href="/login";
}
  function diet(){
    var sta=localStorage.getItem('mystatus');
    var foo=localStorage.getItem('myfood');
    console.log(sta);
    console.log(foo);
    
    if(foo=="Over-weight")
    {
        if(sta=="veg")
        {
            window.location.href="/ov";
        }
        else 
        {
            window.location.href="/on";
        }
    }
    else  if(foo=="Under-weight")
    {
        if(sta=="veg")
        {
            window.location.href="/uv";
        }
        else 
        {
            window.location.href="/un";
        }    
    }
    else if(foo=="Healthy")
    {
        if(sta=="veg")
        {
            window.location.href="/hv";
        }
        else 
        {
          
          window.location.href="/hn";
           
       }
        
    }
}