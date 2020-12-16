import Matching from './Matching'
import scoring from './scoring'
import TimeEstimates from './TimeEstimates'
import Feedback from './Feedback'
import Options from './Options'
import {
  OptionsType,
  CrackTimesSeconds,
  LooseObject,
  ExtendedMatch,
} from './types'

const time = () => new Date().getTime()
interface Result {
  calcTime?: number
  password: string
  guesses: number
  guessesLog10: number
  sequence: ExtendedMatch[]
  crackTimesSeconds: CrackTimesSeconds
  crackTimesDisplay: LooseObject
  score: number
  feedback: object
}

export default (
  password: string,
  userInputs: any[] = [],
  options: OptionsType = {},
) => {
  Options.setOptions(options)
  const feedback = new Feedback()
  const matching = new Matching()
  const timeEstimates = new TimeEstimates()

  const start = time()
  const sanitizedInputs: string[] = []

  userInputs.forEach((input: string | number | boolean) => {
    const inputType = typeof input
    if (
      inputType === 'string' ||
      inputType === 'number' ||
      inputType === 'boolean'
    ) {
      sanitizedInputs.push(input.toString().toLowerCase())
    }
  })

  const matches = matching.match(password, {
    userInputs: sanitizedInputs,
  })
  const matchSequence = scoring.mostGuessableMatchSequence(password, matches)
  const calcTime = time() - start
  const attackTimes = timeEstimates.estimateAttackTimes(matchSequence.guesses)

  const result: Result = {
    calcTime,
    ...matchSequence,
    ...attackTimes,
    feedback: feedback.getFeedback(attackTimes.score, matchSequence.sequence),
  }

  return result
}
