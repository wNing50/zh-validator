import { luhnCheck } from '../utils'

/**
 * 中国银行卡号
 */
export function validateBankCard(cardNumber: string): boolean {
  if (!/^\d{12,19}$/.test(cardNumber)) {
    return false
  }
  return luhnCheck(cardNumber)
}

/**
 * 中国信用卡号校验
 */
export function validateCreditCard(cardNumber: string): boolean {
  // 信用卡号通常为16-19位数字
  if (!/^\d{16,19}$/.test(cardNumber)) {
    return false
  }
  return luhnCheck(cardNumber)
}
