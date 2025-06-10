/**
 * 校验4位年份（1900-2099）
 */
function isValidYear(year: string): boolean {
  return /^(?:19|20)\d{2}$/.test(year)
}

/**
 * 中国大陆本科学位证书编号
 */
export function validateBachelorDegreeCertificateID(id: string) {
  // U+4位年份+8位数字
  const reg = /^U(\d{4})(\d{8})$/
  const match = id.match(reg)
  return !!match && isValidYear(match[1])
}

/**
 * 中国大陆本科学业证书编号
 */
export function validateBachelorStudyCertificateID(id: string) {
  // X+4位年份+8位数字
  const reg = /^X(\d{4})(\d{8})$/
  const match = id.match(reg)
  return !!match && isValidYear(match[1])
}

/**
 * 中国大陆本科毕业证书编号
 */
export function validateBachelorGraduationCertificateID(id: string) {
  // Y+4位年份+8位数字
  const reg = /^Y(\d{4})(\d{8})$/
  const match = id.match(reg)
  return !!match && isValidYear(match[1])
}

/**
 * 中国大陆硕士学位证书编号
 */
export function validateMasterDegreeCertificateID(id: string) {
  // A+4位年份+8位数字
  const reg = /^A(\d{4})(\d{8})$/
  const match = id.match(reg)
  return !!match && isValidYear(match[1])
}

/**
 * 中国大陆硕士学业证书编号
 */
export function validateMasterStudyCertificateID(id: string) {
  // C+4位年份+8位数字
  const reg = /^C(\d{4})(\d{8})$/
  const match = id.match(reg)
  return !!match && isValidYear(match[1])
}

/**
 * 中国大陆硕士毕业证书编号
 */
export function validateMasterGraduationCertificateID(id: string) {
  // Z+4位年份+8位数字
  const reg = /^Z(\d{4})(\d{8})$/
  const match = id.match(reg)
  return !!match && isValidYear(match[1])
}

/**
 * 中国大陆博士学位证书编号
 */
export function validateDoctorDegreeCertificateID(id: string) {
  // B+4位年份+8位数字
  const reg = /^B(\d{4})(\d{8})$/
  const match = id.match(reg)
  return !!match && isValidYear(match[1])
}

/**
 * 中国大陆博士学业证书编号
 */
export function validateDoctorStudyCertificateID(id: string) {
  // D+4位年份+8位数字
  const reg = /^D(\d{4})(\d{8})$/
  const match = id.match(reg)
  return !!match && isValidYear(match[1])
}

/**
 * 中国大陆博士毕业证书编号
 */
export function validateDoctorGraduationCertificateID(id: string) {
  // E+4位年份+8位数字
  const reg = /^E(\d{4})(\d{8})$/
  const match = id.match(reg)
  return !!match && isValidYear(match[1])
}
