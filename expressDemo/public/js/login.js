// 封装一个函数  通过 id 获取页面元素
const $ = id => document.getElementById(id)

// 点击登录按钮
$('login-btn').onclick = function(){
  // 获取登录信息
  const account = $('account')
  const password = $('password')
  const nickname = $('nickname')

  const params = { account, password, nickname}

}