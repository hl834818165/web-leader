/**
 * 
 * @param {校验目标} target 
 * @param {校验类型} type 
 */
function verification (target, type) {
  switch (type) {
    case 'empty':
      return target == '';
      break;
    case 'china':
      return /^[\u4e00-\u9fa5]+$/.test(target);
      break;
    case 'number':
      return /^[0-9]+$/.test(target);
      break;
    case 'english':
      return /^[a-zA-z]+$/.test(target);
      break;
    case 'phone':
      return /^1[3456789]\d{9}$/.test(target);
      break;
    case 'IDCard':
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(target);
      break;
    case 'email':
      return /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(target);
      break;
  }
}