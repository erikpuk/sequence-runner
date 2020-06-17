const fs = require('fs')
const path = require('path')

const LOG_PATH = path.join(__dirname, '..', '__sampletests__', 'log')

function log(message) {
    fs.appendFileSync(LOG_PATH, message+'\n')
}

describe('Underwriter', () => {
    beforeAll(() => {
        log('beforeAll began')
        throw new Error('This should cause things to halt')
        log('beforeAll finished')
    })

    afterAll(() => {
        log('afterAll finished')
        console.log('events:\n ', events.join('\n  '))
    })

    test('this should be skipped', () => {
        log('test finished')
    })
})
