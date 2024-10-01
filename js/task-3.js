function checkForSpam(message){
    const spamWord1 = "spam";
    const spamWord2 = "sale";
    const normalMessage = message.toLowerCase()
    if(normalMessage.includes( spamWord1 )){
        return true;

    }
    else if(normalMessage.includes( spamWord2 )){
        return true;

    }
    else{
        return false;
    }
        

    }

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));

