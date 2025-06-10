import { weightedSum } from '../utils'

/**
 * 中国大陆身份证号
 */
export function validateIDCard(id: string) {
  const reg = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/i
  if (!reg.test(id))
    return false

  // 校验码验证
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  const sum = weightedSum(id.slice(0, -1).split(''), weights)
  return id.at(-1)!.toUpperCase() === checkCodes[sum % 11]
}

/**
 * 中国大陆军官证
 */
export function validateMilitaryOfficerID(id: string) {
  // 格式为：1-2位汉字+6位数字
  const reg = /^[\u4E00-\u9FA5]{1,2}\d{6}$/
  return reg.test(id)
}

/**
 * 中国大陆残疾人证
 */
export function validateDisabilityCertificateID(id: string) {
  // 格式为：17位数字，前6位为地区码，接着8位出生日期（yyyyMMdd），最后3位顺序码
  const reg = /^[1-9]\d{5}(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}$/
  return reg.test(id)
}

/**
 * 中国大陆学生证
 * 一般为：S开头，后跟8位数字
 */
export function validateStudentID(id: string) {
  const reg = /^S\d{8}$/
  return reg.test(id)
}
