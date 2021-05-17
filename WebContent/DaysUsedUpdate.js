const RuleListTotal = {
    Maternity : 20,
    Medical: 10,
    Personal: 5,
    Other: 15,
    Total: 50
}

const RuleListUsed = {
    Maternity : 0,
    Medical: 2,
    Personal: 3,
    Other: 4,
    Total: 9
}

function updateTable(RuleListTotal, RuleListUsed){
    for(let prop in RuleListTotal){
        let a =$("#inr")
        a.append(`<tr>
        <td class = \"text-center\">${prop}</td>
        <td class = \"text-center\">${RuleListTotal[prop]}</td>
        <td class = \"text-center\">${RuleListUsed[prop]}</td>
        <td class = \"text-center\">${RuleListTotal[prop] - RuleListUsed[prop]}</td>
        </tr>`);
    }
}

updateTable(RuleListTotal, RuleListUsed);