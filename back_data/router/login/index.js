const express = require('express')
const router = express.Router()

const connection = require('../../mySQL/index.js')

const {checkMobile, checkPassWord} = require('../../utils/login/index.js')

router.get('/login', function (req, res, next) {
	const {mobile, passWord} = req.query
	/**
	 * 校验手机号格式
	 * checkMobileRes：校验结果
	 * 如果返回空字符串，则校验成功
	 * 否则校验失败
	 */
	const checkMobileRes = checkMobile(mobile)
	
	/**
	 * 校验密码格式
	 * checkPassWordRes：校验结果
	 * 如果返回空字符串，则校验成功
	 * 否则校验失败
	 */
	const checkPassWordRes = checkPassWord(passWord)
	console.log(checkMobileRes , checkPassWordRes)
	if(checkMobileRes || checkPassWordRes){
		const data = {
			code: 101,
			msg: '账号或密码错误！'
		}
		res.json(data)
	}else{
		const sql = `SELECT * FROM user.user WHERE mobile='${mobile}' and passWord='${passWord}'`

		connection.query(sql, function (err, rows, fields) {
		  if (err) throw err
			if(rows.length > 0){
				const data = {
					code: 200,
					msg: '请求成功！'
				}
				res.json(data)
			}
		})
		connection.end()
	}
})

module.exports = router