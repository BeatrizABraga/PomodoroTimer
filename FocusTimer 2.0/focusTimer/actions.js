import state from './state.js'
import * as el from './elements.js'
import { countdown } from './timer.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning () {
    state.isRunning =
     document.documentElement.classList.toggle('running')
    timer.countdown()
}

export const MoreAndLessControl = () => {
    
    if(state.SelectedMoreOrLess === 'more') {
        el[state.isInFocus.id].textContent++
        
    } else if (state.SelectedMoreOrLess === 'less'){
        el[state.isInFocus.id].textContent--
    }

   /*  if (state.isInFocus.id === 'minutes') {
        el.minutes.textContent++;
    } else {
        el.seconds.textContent++;
    } */ 
   
}

export function reset () {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}


const toggleState = () => {
    state.isInFocus.id === 'minutes' ? state.isInFocus = seconds : state.isInFocus = minutes;
    console.log(state.isInFocus.id)
}

export function clock () {
    toggleState();

    if (state.isInFocus.id === 'minutes') {
        minutes.setAttribute('contentEditable', true);
        minutes.focus();
    } else {
        seconds.setAttribute('contentEditable', true);
        seconds.focus();
    }
}
