const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Name : " + e.target.name.value)
    console.log("Email : " + e.target.email.value)
    console.log("Phone : " + e.target.phone.value)
    console.log("Date : " + e.target.date.value)
    console.log("Time : " + e.target.time.value)
   
}