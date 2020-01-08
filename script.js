function currentGrade() {

//homework
var homeworkGrade = document.getElementById("homeworkGrade").value;
var hwArr = arrSplit(homeworkGrade);
var hwAvg = average(hwArr);
console.log(hwAvg);
colors(1,hwAvg);
var hwWeight = (parseInt(document.getElementById("homeworkWeight").value)) / 100;
var hw = weighted(hwAvg , hwWeight);

//classwork
var classworkGrade = document.getElementById("classworkGrade").value;
var cwArr = arrSplit(classworkGrade);
var cwAvg = average(cwArr);
colors(2, cwAvg);
var cwWeight = (parseInt(document.getElementById("classworkWeight").value)) / 100;
var cw = weighted(cwAvg , cwWeight);

//test
var testGrade = document.getElementById("testGrade").value;
var testArr = arrSplit(testGrade);
var testAvg = average(testArr);
console.log(testAvg);
colors(3, testAvg);
var testWeight = (parseInt(document.getElementById("testWeight").value)) / 100;
var test = weighted(testAvg , testWeight);

//participation
var participationGrade = document.getElementById("participationGrade").value;
var partArr = arrSplit(participationGrade);
var partAvg = average(partArr);
    console.log(partAvg);
    colors(4, partAvg);
var partWeight = (parseInt(document.getElementById("participationWeight").value)) / 100;
var part = weighted(partAvg , partWeight);

//project
var projectGrade = document.getElementById("projectGrade").value;
var proArr = arrSplit(projectGrade);
var proAvg = average(proArr);
    console.log(proAvg);
    colors(5, proAvg);
var proWeight = (parseInt(document.getElementById("projectWeight").value)) / 100;
var pro = weighted(proAvg , proWeight);

//calculations
var studentGrade = (hw + cw + test + part + pro) ;
studentGrade = Math.round(studentGrade);
console.log(studentGrade);

//finals
    var finalWeight = document.getElementById("ffWeight").value;


//ERROR CHECKS
var weightSumCheck = hwWeight + cwWeight + testWeight + partWeight + proWeight + (finalWeight/100);

if (weightSumCheck != 1){
    document.getElementById("remind").innerHTML="Your weights need to add up to 100!";
    //also set grade div innerHTML to ""
    document.getElementById("studentGrade").innerHTML="";
} else {
    document.getElementById("studentGrade").innerHTML = "Your grade is " + studentGrade + "% .";
    //remove error message from div
    document.getElementById("remind").innerHTML="";
}

return studentGrade;
}

function finalGradeNeeded(){
    var currentGRADE = currentGrade();
    console.log(currentGRADE);
    var desire = document.getElementById("ffDesire").value;
    var finalWeight = document.getElementById("ffWeight").value;

    //calculations
    var desArr = arrSplit(desire);
    var weiArr = arrSplit(finalWeight);

    //calculations part 2
    var percent1 = currentGRADE / 100;
    var wWeight = percent1 * (100-weiArr);
    var wdesire = desArr - wWeight;
    var divv = wdesire / weiArr;
    var multt = divv * 100;
    var end = Math.round(multt);

    if (isNaN(end)) {
        document.getElementById("end").innerHTML= "Please review the numbers input, there is an error.";
        document.getElementById("endHelp").innerHTML= "If it looks like there's a problem, check to make sure your weights add up to 100 and that there is a real number entered.";
    } else {
        document.getElementById("end").innerHTML= "You will need to get a "+ end + "% of the final to get " + desArr + "% in your class.";
    }
    if (end>100){
        document.getElementById("realistic").innerHTML= "Aw, that's close to impossible. Aim for a lower desired grade.";
    }
    if (end<0){
        document.getElementById("realistic").innerHTML= "Negative grades are not possible. Aim for a higher desired grade.";
    }
    return end;

}

function arrSplit(str){
    var arr = str.split(",");
    for (var i = 0; i < arr.length; i ++){
        arr[i] = parseInt(arr[i]);
    }
    console.log(arr);
    return arr;
}

function average(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        count = count + arr[i];
    }
    var avg = count / (arr.length);
    console.log(avg);
    return avg;
}


function weighted(avg, weight){
    var aw = avg * weight;
    console.log(aw);
    return aw;
}


function reset(){
    //colors
    document.getElementById(1).style.backgroundColor = "";
    document.getElementById(2).style.backgroundColor = "#fafafa";
    document.getElementById(3).style.backgroundColor = "#fafafa";
    document.getElementById(4).style.backgroundColor = "#fafafa";
    document.getElementById(5).style.backgroundColor = "#fafafa";
    //responses
    document.getElementById("studentGrade").innerHTML = "";
    document.getElementById("end").innerHTML= "";
    document.getElementById("remind").innerHTML = "";
    //inputs
    var allInputs = document.getElementsByTagName("input");
    console.log(allInputs);
    for(var i = 0; i<=12; i++){
        allInputs[i].value = "";
    }
}


function colors(row, avg){
    if (avg >= 90){
        document.getElementById(row).style.backgroundColor = "#00c000";
    }else if (avg >=80){
        document.getElementById(row).style.backgroundColor = "#00FF00";
    }else if (avg >= 70){
        document.getElementById(row).style.backgroundColor = "#FFFF00";
    }else if (avg >= 60){
        document.getElementById(row).style.backgroundColor = "#FFA500";
    }else if (avg >= 50){
        document.getElementById(row).style.backgroundColor = "#FF0000";
    }else {
        document.getElementById(row).style.backgroundColor = "#800000";
    }
}


