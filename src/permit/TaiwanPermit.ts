/**
 * 台湾居民来往大陆通行证校验（旧版）
 */
export function validateOldTaiwanPermit(pass: string): boolean {
  // 8位数字
  return /^\d{8}$/.test(pass)
}

/**
 * 台湾居民来往大陆通行证校验（新版）
 */
export function validateNewTaiwanPermit(pass: string): boolean {
  // 字母+8位数字
  return /^[A-Z]\d{8}$/i.test(pass)
}

/**
 * 台湾居民来往大陆通行证校验（新旧版）
 */
export function validateTaiwanPermit(pass: string): boolean {
  return validateOldTaiwanPermit(pass) || validateNewTaiwanPermit(pass)
}
