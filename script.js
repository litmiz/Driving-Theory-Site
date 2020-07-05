async function fetchQuests(questNum) {
    const response = await fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=bf7cb748-f220-474b-a4d5-2d59f93db28d&limit=${questNum}`);
    const data = await response.json();
    return data;
};

let questNum = 10;
function showQuest() {
    fetchQuests(questNum).then(data => {
        data.result.records.forEach(element => {
            document.getElementById('questArea').innerHTML += `
                <h3>${element.title2}</h3> 
                <p>${element.category}</p> 
                <div>${element.description4}</div>
            `
            document.getElementById('moreQuestArea').innerHTML = `
            <button id="moreQuestBtn" onclick="showQuest()">טען שאלות נוספות</button>
            `
        });
        questNum += 10;
    });
};