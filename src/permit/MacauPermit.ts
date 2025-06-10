/**
 * 旧版澳门往来通行证（2020年前签发）
 */
export function validateOldMacauPermit(pass: string): boolean {
  // 格式：C + 6位顺序号 + 2位校验码
  return /^C\d{8}$/i.test(pass)
}

/**
 * 新版澳门往来通行证（2020后前签发）
 */
export function validateNewMacauPermit(pass: string): boolean {
  // 格式：C + 8位顺序号 + 1位校验码
  return /^C\d{9}$/i.test(pass)
}

/**
 * 澳门往来通行证校验（新旧版）
 */
export function validateMacauPermit(pass: string): boolean {
  return validateNewMacauPermit(pass) || validateOldMacauPermit(pass)
}
