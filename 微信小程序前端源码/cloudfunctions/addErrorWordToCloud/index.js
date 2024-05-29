const cloud = require('wx-server-sdk')
cloud.init({
  env: 'cloud1-9g3cfsud0e4d1f22'
})
const db = cloud.database()

exports.main = async (event, context) => {
  const {word,meaning,openid}=event
  try {
    // 查询数据库中是否已存在该单词
    const queryResult = await db.collection('words').where({
      word: word,
      openid:openid
    }).get();
    if (queryResult.data.length === 0) {
      // 如果单词不存在，插入新记录
      await db.collection('words').add({
        data: {
          word: word,
          meaning: meaning,
          errorCount: 1 ,// 错误次数初始为1
          openid:openid
        }
      })
    } else {
      // 如果单词已存在，更新错误次数加一
      const wordId = queryResult.data[0]._id
      
      await db.collection('words').doc(wordId).update({
        data: {
          errorCount: db.command.inc(1)
        }
      })
    }

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