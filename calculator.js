//getting the elements from HTML document
var button=document.querySelector('button');

var high1=document.getElementById('high1')
var high2=document.getElementById('high2');
var high3=document.getElementById('high3');

var tam11=document.getElementById('11tam');
var eng11=document.getElementById('11eng');
var mat11=document.getElementById('11mat');
var phy11=document.getElementById('11phy');
var che11=document.getElementById('11che');
var cs11=document.getElementById('11cs');



function calculate(){
// giving little information LOL!
alert(`Assuming Your 12th internal and Practical marks are 30
Result is calculated!`);
//converting string values into number
var highestmark1=parseInt((high1.value),10);
var highestmark2=parseInt((high2.value),10);
var highestmark3=parseInt((high3.value),10);

var tamil11=parseInt((tam11.value),10);
var english11=parseInt((eng11.value),10);
var maths11=parseInt((mat11.value),10);
var pyhsics11=parseInt((phy11.value),10);
var chemistry11=parseInt((che11.value),10);
var computerscience11=parseInt((cs11.value),10);

//calculating 10 average
var average10=((highestmark1+highestmark2+highestmark3)/300)*50;

//calculating 12 marks
var tamil12=average10+30+((tamil11/90)*20);
var english12=average10+30+((english11/90)*20);
var maths12=average10+30+((maths11/90)*20);
var chemistry12=average10+30+((chemistry11/70)*20);
var physics12=average10+30+((pyhsics11/70)*20);
var computerscience12=average10+30+((computerscience11/70)*20);
var total=tamil12+english12+maths12+chemistry12+physics12+computerscience12;
var cuttoff=maths12+((chemistry12+physics12)/2);

//displaying 12 marks
document.getElementById('10avg').value=Math.round(average10);
document.getElementById('12tam').value=Math.round(tamil12);
document.getElementById('12eng').value=Math.round(english12);
document.getElementById('12mat').value=Math.round(maths12);
document.getElementById('12che').value=Math.round(chemistry12);
document.getElementById('12phy').value=Math.round(physics12);
document.getElementById('12cs').value=Math.round(computerscience12);
document.getElementById('total').value=Math.round(total);
document.getElementById('cuttoff').value=Math.round(cuttoff);

};


button.addEventListener('click',calculate);

