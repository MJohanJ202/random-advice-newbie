import { quote } from '../config/types'

export const getQuotes = async (): Promise<quote> => {
  const res = await fetch('https://api.adviceslip.com/advice')
  const data = await res.json()
  const { slip: { id, advice } } = data
  return { id, advice }
}
