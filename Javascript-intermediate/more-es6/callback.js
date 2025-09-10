//callback

function married(callMeBack, patro, patri) {
    if (patri) {
        callMeBack(patro);
    } else {
        console.log("tor kopale biya nai.");
    }
}
function callSomeOne(person) {
    console.log("calling", person);
}

married(callSomeOne, "imran", "this is");
