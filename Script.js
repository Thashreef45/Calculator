var opClicked=0;
var val1;
var opvalue; 
var decimal=0;
var ar=new Array(20);

for(var i=0;i<=20;i++)
{
    ar[i]="a";
}

function decimalclicked(buttonvalue)
{
    if(opClicked==1){
        document.getElementById("displayLabel").value=""+"."
        opClicked=0;
    }
    
    else if(decimal==1)
    {
      
    }
    else{
        decimal=1;
        document.getElementById("displayLabel").value+=buttonvalue
    }
  
}
function buttonclicked(buttonvalue)
{
    if(opClicked==1)
    {
  document.getElementById("displayLabel").value=buttonvalue
  opClicked=0;
    }
    else{
        document.getElementById("displayLabel").value+=buttonvalue
    }
}


function clearClicked()
{
    for(var i=0;i<=20;i++)
    {
    ar[i]="a";
    }
    document.getElementById("displayLabel").value=""
}


function equalClicked()
 {
   decimal=0;
   var result="0+";
   var r;
   for(var i=0;i<=20;i++)
   {
    if(ar[i]=="a")
    {
        
        ar[i]=document.getElementById("displayLabel").value
        r=i;
        break;
    }
   }
   console.log(r)

    for(var i=0;i<=r;i++)
    {
      result=result+ar[i];
    }
    console.log(result)
    document.getElementById("displayLabel").value=eval(result)
    
    
    for(var i=0;i<=20;i++)
    {
    ar[i]="a";
    }/*for resetting the array elements*/

 }


function operatorClicked(opvalue)
{
    decimal=0;
    this.opvalue=opvalue
    if(opvalue==1)
    {
        opClicked=1;
        for(var i=0;i<=20;i++)
        {
            if(ar[i]=="a")
            {
                ar[i]=document.getElementById("displayLabel").value
                ar[i+1]="/"
                break;

            }
        }
    }
    else if(opvalue==2)
    {
        opClicked=1;
        for(var i=0;i<=20;i++)
        {
            if(ar[i]=="a")
            {
                ar[i]=document.getElementById("displayLabel").value
                ar[i+1]="*"
                break;
            }
        }
    }
    else if(opvalue==3)
    {
        opClicked=1;
        for(var i=0;i<=20;i++)
        {
            if(ar[i]=="a")
            {
                ar[i]=document.getElementById("displayLabel").value
                ar[i+1]="-"
                break;
            }
        }
    }
    else if(opvalue==4)
    {
        opClicked=1;
        for(var i=0;i<=20;i++)
        {
            if(ar[i]=="a")
            {
                ar[i]=document.getElementById("displayLabel").value
                ar[i+1]="+"
                break;
            }
        }
    }

}