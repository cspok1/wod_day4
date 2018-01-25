function timeConvert(time){
		var arr = time.split(":");
    var cleanTime = time.substring(2).slice(0,-2);
    console.log(parseInt(arr[0]))

  if(time.charAt(0)=="1" && time.charAt(1)=="2" && time.charAt(8)=="A"){
    return "00"+ cleanTime;
  } else if (time.charAt(0)=="1" && time.charAt(1)=="2" && time.charAt(8)=="P"){
    return time.slice(0,-2);
  } else if (time.charAt(8)=="P"){
    return 12+parseInt(arr[0]) + cleanTime ;
	} else if (time.charAt(8)=="A"){
    return time.slice(0,-2);
  }
}

document.write(timeConvert("07:05:45PM"));
document.write("<br/>");
document.write(timeConvert("07:05:45AM"));
document.write("<br/>");
document.write(timeConvert("12:05:45AM"));
document.write("<br/>");
document.write(timeConvert("12:05:45PM"));