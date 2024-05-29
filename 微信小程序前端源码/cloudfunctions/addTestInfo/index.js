const cloud = require('wx-server-sdk')
cloud.init({
  env: 'cloud1-9g3cfsud0e4d1f22'
})
const db = cloud.database()

exports.main = async (event, context) => {
  const {rightNum,wrongNum,time,openid}=event
  try {   
      await db.collection('history').add({
        data: {
          rightNum: rightNum,
          wrongNum: wrongNum,
          time: time,
          openid:openid
        }
      })
    return {
      success: true
    }
  } catch (err) {
    return {
      success: false,
      errMsg: err.message
    }
  }
}