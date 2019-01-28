function dwarfRollCall(dwarves){
	var str = "";
  var i;
	for (i = 0; i < dwarves.length; i += 1){
		str += (i + 1) + ". " + dwarves[i] + " ";
		}
	return str;
}
}
