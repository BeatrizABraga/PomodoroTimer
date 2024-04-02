import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as actions from './actions.js'
import * as sounds from './sounds.js'


export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay()
    events.registerControls()
}