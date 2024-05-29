// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'cloud1-9g3cfsud0e4d1f22'
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const id=event
 
  try{
    await db.collection('words').doc(id.id).remove()
    return {
      success: true
    }
  }catch (err) {
    return {
      success: false,
      errMsg: err.message
    }
  }
}