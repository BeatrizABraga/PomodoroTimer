import { controls } from './elements.js'
import * as el from './elements.js'
import * as actions from './actions.js'
import state from './state.js'
import { updateDisplay } from './timer.js'


export function registerControls() {
    controls.addEventListener('click', (event) => {

        if (event.target.id === 'more' || event.target.id === 'less') {
            state.SelectedMoreOrLess = event.target.id;
        }
        const action = event.target.dataset.action
       
        if(typeof actions[action] != 'function') {
            return
        }

        actions[action]()
    })
}




