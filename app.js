function Result(){
    let CityNames = ["Karachi","Lahour","Quetta","Faisalabad","Hyderabad","Peshawar"]
    let UserValue = document.getElementById("UserValue")
 
    let conformation = "Yes"
    for(let i = 0 ; i < CityNames.length; i++){
    if(UserValue == CityNames[i]){
    conformation = "no"
    break;
}
    console.log(CityNames[i])
}
if (conformation == "No"){
    alert("City did no match")
}else{
    alert("City did match")
    
}
}