const setHeader = async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Credentials', true);
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS, PATCH');
  ctx.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  ctx.set("Content-Type", "application/json;charset=utf-8");
  // 设置了缓存的有效时间，减少options请求的次数
  ctx.set("Access-Control-Max-Age", 300);
  // 响应options请求
  if (ctx.request.method === 'OPTIONS') {
    ctx.response.body = 200
  }
  await next();
}

module.exports = setHeader