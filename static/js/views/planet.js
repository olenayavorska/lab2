'use strict'

const planetModel = new planet() // eslint-disable-line no-undef

function initAddForm () {
  const form = window.document.querySelector('#planet-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const planetData = {}
    formData.forEach((value, key) => {
      planetData[key] = value
    })

    planetModel.Create(planetData)

    e.target.reset()
  })
}

function initList () {
  window.jQuery('#planet-list').DataTable({
    data: planetModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Name', data: 'name' },
      { title: 'Capasity', data: 'capacity' },
      { title: 'Mass', data: 'mass' },
      { title: 'Delete', data: '' }
    ],
    columnDefs: [
      {
        "render": function(data, type, row) {
          return '<button type="button" value="delete" onclick="deleteItem(this)">Delete</button>';
        },
        "targets": 4
      }
    ]
  })
}

function deleteItem(e) {
  let row = e.parentNode.parentNode;
  let id = row.getElementsByTagName('td')[0].innerText;
  row.remove();
  planetModel.Delete(ID);
}


function initListEvents () {
  document.addEventListener('planetListDataChanged', function (e) {
    const dataTable = window.jQuery('#shop-list').DataTable()

    dataTable.clear()
    dataTable.rows.add(e.detail)
    dataTable.draw()
  }, false)
}

window.addEventListener('DOMContentLoaded', e => {
  initAddForm()
  initList()
  initListEvents()
})
