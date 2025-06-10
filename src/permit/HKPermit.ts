/**
 * 旧版香港往来通行证（2020年前签发）
 */
export function validateOldHKPermit(pass: string): boolean {
  // 格式：[H|M] + 8位顺序号 + 2位校验码
  // H：香港永久性居民， M：香港非永久性居民
  return /^[HM]\d{10}$/i.test(pass)
}

/**
 * 新版香港往来通行证（2020年后签发）
 */
export function validateNewHKPermit(pass: string): boolean {
  // 格式：H + 7位顺序号 + 1位校验码
  return /^H\d{8}$/i.test(pass)
}

/**
 * 香港往来通行证校验（新旧版）
 */
export function validateHKPermit(pass: string): boolean {
  return validateNewHKPermit(pass) || validateOldHKPermit(pass)
}
