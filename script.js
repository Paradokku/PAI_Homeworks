var addBtn = document.querySelector("#btn");
var table = document.querySelector("#table");
console.dir(table);

addBtn.addEventListener('click',addRow)

function addRow(params){
    var tableLenght = table.rows.lenght;

    for (let index = 0; index < time_tab.length; index++) {
        const element = time_tab[index];
        var row = table.insertRow(tableLenght);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = element.id;
        var cell2 = row.insertCell(1);
        cell2.innerHTML = element.data;        
    }

}

var time_tab = [{
    "id":1,
    "data":moment().format('MMMM'),
},
{
    "id":2,
    "data":moment().format('Do'),
},
{
    "id":3,
    "data":moment().format('YYYY'),
},
{
    "id":4,
    "data":moment().format('h:mm:ss'),
}]