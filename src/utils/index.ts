/**
 * 计算加权和
 * @param values 数值数组
 * @param weights 权重数组
 * @returns 加权和
 */
export function weightedSum(values: string[], weights: number[]): number {
  if (values.length !== weights.length) {
    throw new Error('values 和 weights 长度不一致')
  }
  return values.reduce((sum, val, idx) => sum + Number.parseInt(val) * weights[idx], 0)
}

/**
 * Luhn算法校验
 * @param code 待校验的数字字符串
 * @returns 是否通过校验
 */
export function luhnCheck(code: string): boolean {
  let sum = 0
  let shouldDouble = false
  for (let i = code.length - 1; i >= 0; i--) {
    let digit = Number.parseInt(code.charAt(i), 10)
    if (Number.isNaN(digit))
      return false
    if (shouldDouble) {
      digit *= 2
      if (digit > 9)
        digit -= 9
    }
    sum += digit
    shouldDouble = !shouldDouble
  }
  return sum % 10 === 0
}
