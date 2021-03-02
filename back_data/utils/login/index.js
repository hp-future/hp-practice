// 校验手机号格式
const checkMobile = (value) => {
	const reg = /^1[3456789]\d{9}$/
	if(!value){
		return '请输入手机号！'
	}else if(!reg.test(value)){
		return '手机号格式错误！'
	}else{
		return ''
	}
}

// 校验密码格式， 包含 字母、数字、特殊字符
const checkPassWord = (value) => {
	const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^^<>?"'*@$&={}+-])[^]{8,20}$/
	if(!value){
		return '请输入密码！'
	}else if(!reg.test(value)){
		return '密码格式错误！'
	}else{
		return ''
	}
}

module.exports = {
	checkMobile,
	checkPassWord
}