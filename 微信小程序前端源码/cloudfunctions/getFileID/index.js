// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: 'cloud1-9g3cfsud0e4d1f22'}) // 使用当前云环境
const db = cloud.database(); 

// 云函数入口函数
exports.main = async (event, context) => {
  const word = event.word
  try {
    const res = await db.collection('address').where({
      word:word
    }).get(); 
    console.log(word)
    return res.data; // 返回错题列表数据
  } catch (err) {
    console.error(err);
    return err;
  }
}