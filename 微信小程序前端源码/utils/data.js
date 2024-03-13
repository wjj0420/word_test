module.exports = {
  mtData: mtData,
  searchmtdata: searchmtdata,
  usedraw: usedraw
}
var mt_data = mtData()
function searchmtdata(id) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if (mt.id == id) {
      result = mt
    }
  }
  return result || {}
}

function mtData() {
  var arr = {
    list: [
      {
        id: '1',
        MTId: 'MT001',
        status: 'working',
        Duration: 3,
        Operator: 'tom',
        IdleReason: 'lunch'
      }, {
        id: '2',
        MTId: 'MT002',
        status: 'Idle',
        Duration: 7,
        Operator: 'jerry',
        IdleReason: 'reparied'
      }, {
        id: '3',
        MTId: 'MT003',
        status: 'Idle',
        Duration: 6,
        Operator: 'tom',
        IdleReason: 'lunch'
      }, {
        id: '4',
        MTId: 'MT004',
        status: 'working',
        Duration: 9,
        Operator: 'jerry',
        IdleReason: 'reparied'
      }, {
        id: '5',
        MTId: 'MT005',
        status: 'Idle',
        Duration: 2,
        Operator: 'tom',
        IdleReason: 'lunch'
      }, {
        id: '6',
        MTId: 'MT006',
        status: 'working',
        Duration: 6,
        Operator: 'jerry',
        IdleReason: 'reparied'
      }, {
        id: '7',
        MTId: 'MT007',
        status: 'Idle',
        Duration: 1,
        Operator: 'tom',
        IdleReason: 'lunch'
      }
    ]
  }
  return arr
} 