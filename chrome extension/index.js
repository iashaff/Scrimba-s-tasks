let myLeads = [];
const saveBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn')
const tabBnt = document.getElementById('tab-btn')
const leadsFromlocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromlocalStorage) {
    myLeads = leadsFromlocalStorage
    render(myLeads)
}

tabBnt.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myLeads))
        render(myLeads)
    })

})

function render(leads) {
    let listItem = ""

    for (let i = 0; i < leads.length; i++) {
        listItem += `
    <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
    </li>
`
    }

    ulEl.innerHTML = listItem
}

deleteBtn.addEventListener('dblclick', function () {
    localStorage.clear();
    myLeads = []
    render(myLeads)
})

saveBtn.addEventListener('click', function saved() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
})
