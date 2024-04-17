const outputScreen=document.getElementById("output-screen");
function display(num)
{
        outputScreen.value+=num;
}
function calculate(){
        try{
                outputScreen.value=eval(outputScreen.value);
        }
        catch(err)
        {
                alert("Invalid numbers")
        }
}
function Clr(){
        outputScreen.value="0";
}
function del(){
        outputScreen.value=outputScreen.value.slice(0,-1)
}