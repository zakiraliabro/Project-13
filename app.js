function Result(){
    let CityNames = ["Karachi","Lahour","Quetta","Faisalabad","Hyderabad","Peshawar"]
    let UserValue = document.getElementById("user-value").value
 
    let conformation = "No"
    for(let i = 0 ; i < CityNames.length; i++){
    if(UserValue  == CityNames[i].toLowerCase()){
    conformation = "Yes"
    break;
}
    console.log(CityNames[i])
}
if (conformation == "Yes"){
    alert("City did  match")
}else{
    alert("City did no match")
    
}
}
