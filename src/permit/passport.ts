/**
 * 校验中国大陆护照编号
 */
export function validatePassport(passport: string): boolean {
//  以字母E、G、D、S、P、H、M开头，后跟8位数字
  return /^[EGDSPHM]\d{8}$/.test(passport)
}

/**
 * 校验香港特别行政区护照编号
 */
export function validateHKPassport(passport: string): boolean {
  //  以字母K开头，后跟7位数字
  return /^K\d{7}$/.test(passport)
}

/**
 * 校验澳门特别行政区护照编号
 */
export function validateMOPassport(passport: string): boolean {
  //  以字母M开头，后跟7位数字
  return /^M\d{7}$/.test(passport)
}

/**
 * 校验台湾护照编号
 */
export function validateTWPassport(passport: string): boolean {
  //  以字母开头，后跟8位数字
  return /^[A-Z]\d{8}$/.test(passport)
}
