// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  const openId = wxContext.OPENID;
  const user = { _id: openId };
  const { userinfo } = event;

  if (userinfo) {
    Object.assign(user, {
      name: userinfo.nickName,
      thumbnail: userinfo.avatarUrl,
      gender: userinfo.gender,
      userinfo,
    });
  }

  const db = cloud.database();
  const _ = db.command;

  const {
    data: [us],
  } = await db
    .collection('user')
    .where({
      _id: openId,
    })
    .get();

  if (!us) {
    await db.collection('user').add({
      data: user,
    });
  } else if (userinfo) {
    const u = { ...user };
    Reflect.deleteProperty(u, '_id');
    await db.collection('user').doc(openId).update({
      data: u,
    });
  } else {
    Object.assign(user, us);
  }

  return {
    success: true,
    data: user,
  };
};
