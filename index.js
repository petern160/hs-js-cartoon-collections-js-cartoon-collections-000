
function dwarfRollCall(dwarf){
	var array =[]
	for (var i=0;i<dwarf.length;i++){
		array.push([i+1] +". " + dwarf[i] + " " )
	}
	return array.join("")
}


function summonCaptainPlanet(planeteerCalls){
 return planeteerCalls.map(x=>x.toUpperCase()+"!")

}



function longPlaneteerCalls(words){
  for(var i=0;i<words.length;i++){
    if (words[i].length>4){
      return true
    }
  }
  return false
}


  function findTheCheese (foods) {
  for(var i=0;i<foods.length;i++){
  if (foods[i]=="cheddar"
    ||foods[i]=="gouda"
    ||foods[i]=="camembert"
  ) {
    return foods[i]
  	}
	}
return "no cheese!"
}
