import request from '../request';

export function getTestApi() {
  return request.get('https://zj.v.api.aa1.cn/api/xz/?code=654028207203');
}
