const request = (name, data) => {
  wx.cloud.init();
  return wx.cloud.callFunction({
    name,
    data
  })
}
export default request;