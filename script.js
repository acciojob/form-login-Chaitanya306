const form=document.getElementById('form1')
const fname=document.getElementsByName('fname')
const lname=document.getElementsByName('lname')
function getFormvalue() {
    //Write your code here
	alert(`${fname[0].value} ${lname[0].value}`)
}
