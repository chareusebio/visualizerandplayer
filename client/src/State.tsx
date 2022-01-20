// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { XylophoneInstrument } from './instruments/chareusebio';
import { spin } from './visualizers/chareusebio';
import { VernonInstrument } from './instruments/vxie123';
import { Drum } from './instruments/rhoannajo';
import { CircleWave } from './visualizers/rhoannajo';
import { WaveformVisualizer } from './visualizers/Waveform';
import { VernonVisualizer } from './visualizers/vxie123';

import { smana003Instrument } from './instruments/smana003';
import { smana003Visualizer } from './visualizers/smana003';

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;

const instruments = List([PianoInstrument, VernonInstrument, smana003Instrument, XylophoneInstrument, Drum]);
const visualizers = List([WaveformVisualizer, VernonVisualizer, smana003Visualizer, spin, CircleWave]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
