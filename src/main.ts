import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const nameToGreet: string = core.getInput('who-to-greet')
    core.debug(`(debug) Hello ${nameToGreet}!`)
    // eslint-disable-next-line no-console
    console.log(`(console) Hello ${nameToGreet}!`)
    const ms: string = core.getInput('milliseconds')
    core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
    core.info('This is an info message')
    core.notice('This is a notice')
    core.warning('This is a warning')

    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
