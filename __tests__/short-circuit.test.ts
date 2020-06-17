import SequenceRunner from '../src/sequence-runner'

import { join } from 'path'
import { spawnSync, SpawnSyncReturns } from 'child_process'
import { writeFileSync, readFileSync } from 'fs'

const RUN_SAMPLES_CONFIG_PATH = join(__dirname, '..', '__sampletests__', 'jest.json')
const SAMPLES_LOG_PATH = join(__dirname, '..', '__sampletests__', 'log')

function getLogItems() {
  const lines = readFileSync(SAMPLES_LOG_PATH).toString().split('\n')
  return lines.filter((line) => line)
}

describe('short circuiting behavior', () => {
  let result: SpawnSyncReturns<string>
  let logs: string[]
  beforeAll(() => {
    result = spawnSync('jest', ['--config', RUN_SAMPLES_CONFIG_PATH, '--silent'])
    logs = getLogItems()
  })

  test('exit code should be 1', () => {
    writeFileSync(SAMPLES_LOG_PATH, '')
    expect(result.status).toBe(1)
  })

  test('beforeAll did start', () => {
    expect(logs).toContain('beforeAll began')
  })

  test('beforeAll did not finish', () => {
    expect(logs).not.toContain('beforeAll finished')
  })

  test('test block did not run', () => {
    expect(logs).not.toContain('test finished')
  })

  test('afterAll did run', () => {
    expect(logs).toContain('afterAll finished')
  })
})
