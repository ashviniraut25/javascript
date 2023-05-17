console.log(`==============TCS Interview Eligibility=================`);

var args = function (gradScore,hscScore,sssScore,CandidateName) {
    var result = gradScore >= 70 || hscScore >= 80 || sssScore > 90 ? `Congrates ${CandidateName} you are eligible for TCS interview` : `Unfortunately ${CandidateName} you are not eligible for interview`;
    console.log(result);
    console.log(`........................................................`);
    
}
args (80, 86, 90, "Ashvini");
args (70, 65, 55, "Rita");
args (60, 79, 88, "Roshan");
