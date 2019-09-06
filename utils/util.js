/**
 * 格式化时间
 */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * 判断字符串是否有效
 */
const isEmpty = obj => {
  if (typeof obj == "undefined" || obj == null || obj.toString().trim() == "") {
    return true;
  } else {
    return false;
  }
}

/**
 * 格式化数字
 */
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 验证手机号
 */
const checkMobile = no => {
  let regular = /^1[34578]\d{9}$/;
  if (!regular.test(no)) {
    return false;
  }
  return true;
}

/**
 * 显示模式窗口
 */
const showModal = (content, showCancel) => {
  wx.showModal({
    content: content,
    showCancel: showCancel
  });
}

module.exports = {
  formatTime: formatTime,
  isEmpty: isEmpty,
  checkMobile: checkMobile,
  showModal: showModal
}