console.log(`===================TCS Interview=======================`);

function interview(gradScore, hscScore, sscScore, candidateName) {
    if ((gradScore>=70) || (hscScore>=80) || (sscScore>90)) {
        console.log(`Congrates ${candidateName} you are elligible for TCS interview.`);
        console.log(`.......................................................`);
        
    } else {
        console.log(`Unfortunately you are not eligible for interview`);
        console.log(`.......................................................`);

    }
    
}
interview(80, 60, 90, "Ashvini");
interview(70, 65, 55, "Dipali");
interview(60, 79, 88, "Rohan");
