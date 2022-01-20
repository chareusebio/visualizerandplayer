// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';
import './xylophone.css';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface XylophoneProps {
  note: string;
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  octave: number;
  index: number; // octave + index together give a location for the piano key
}

export function XylophoneKey({
  note,
  synth,
  minor,
  index,
}: XylophoneProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the piano.
   * See `PianoKeyWithoutJSX` for the React component without JSX.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames('ba pointer absolute dim', {
        'bg-black black h3': minor, // minor keys are black
        'black bg-white h4': !minor, // major keys are white
      })}
      style={{
        // CSS
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
      }}
    ></div>
  );
}

// eslint-disable-next-line
function XylophoneKeyWithoutJSX({
  note,
  synth,
  minor,
  index,
}: XylophoneProps): JSX.Element {
  /**
   * This React component for pedagogical purposes.
   * See `PianoKey` for the React component with JSX (JavaScript XML).
   */
  return React.createElement(
    'div',
    {
      onMouseDown: () => synth?.triggerAttack(`${note}`),
      onMouseUp: () => synth?.triggerRelease('+0.25'),
      className: classNames('ba pointer absolute dim', {
        'bg-black black h3': minor,
        'black bg-white h4': !minor,
      }),
      style: {
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
      },
    },
    [],
  );
}

function XylophoneType({ title, onClick, active }: any): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
        'b--black black': active,
        'gray b--light-gray': !active,
      })}
    >
      {title}
    </div>
  );
}

function Xylophone({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'C', idx: 0 },
    { note: 'Db', idx: 0.5 },
    { note: 'D', idx: 1 },
    { note: 'Eb', idx: 1.5 },
    { note: 'E', idx: 2 },
    { note: 'F', idx: 3 },
    { note: 'Gb', idx: 3.5 },
    { note: 'G', idx: 4 },
    { note: 'Ab', idx: 4.5 },
    { note: 'A', idx: 5 },
    { note: 'Bb', idx: 5.5 },
    { note: 'B', idx: 6 },
  ]);

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };



  const oscillators: List<OscillatorType> = List([
    'sine',
    'sawtooth',
    'square',
    'triangle',
    'fmsine',
    'fmsawtooth',
    'fmtriangle',
    'amsine',
    'amsawtooth',
    'amtriangle',
  ]) as List<OscillatorType>;

  return (
    <div className="pv4">
      <div className = "keys">
      <div className="sharpkeys">
            <XylophoneType
              key={"C#5"}
              title={"C#5"}
              onClick={() => setC5S()}
              active={true}
            />
            <XylophoneType
              key={"D#5"}
              title={"D#5"}
              onClick={() => setD5S()}
              active={true}
            />
            <XylophoneType
              key={"F#5"}
              title={"F#5"}
              onClick={() => setF5S()}
              active={true}
            />
              <XylophoneType
              key={"G#5"}
              title={"G#5"}
              onClick={() => setG5S()}
              active={true}
            />
            <XylophoneType
              key={"A#5"}
              title={"A#5"}
              onClick={() => setA5S()}
              active={true}
            />
            <XylophoneType
              key={"C#6"}
              title={"C#6"}
              onClick={() => setC6S()}
              active={true}
            />
            <XylophoneType
              key={"D#6"}
              title={"D#6"}
              onClick={() => setD6S()}
              active={true}
            />
            <XylophoneType
              key={"F#6"}
              title={"F#6"}
              onClick={() => setF6S()}
              active={true}
            />
            <XylophoneType
              key={"G#6"}
              title={"G#6"}
              onClick={() => setG6S()}
              active={true}
            />
            <XylophoneType
              key={"A#6"}
              title={"A#6"}
              onClick={() => setA6S()}
              active={true}
            />
            <XylophoneType
              key={"C#7"}
              title={"C#7"}
              onClick={() => setC7S()}
              active={true}
            />
            <XylophoneType
              key={"D#7"}
              title={"D#7"}
              onClick={() => setD7S()}
              active={true}
            />
            <XylophoneType
              key={"F#7"}
              title={"F#7"}
              onClick={() => setF7S()}
              active={true}
            />

            

      </div>
      <div className="regularkeys">

            <XylophoneType
              key={"C5"}
              title={"C5"}
              onClick={() => setC5()}
              active={true}
            />
            <XylophoneType
              key={"D5"}
              title={"D5"}
              onClick={() => setD5()}
              active={true}
            />
            <XylophoneType
              key={"E5"}
              title={"E5"}
              onClick={() => setE5()}
              active={true}
            />
            <XylophoneType
              key={"F5"}
              title={"F5"}
              onClick={() => setF5()}
              active={true}
            />
            <XylophoneType
              key={"G5"}
              title={"G5"}
              onClick={() => setG5()}
              active={true}
            />
                        <XylophoneType
              key={"A5"}
              title={"A5"}
              onClick={() => setA5()}
              active={true}
            />
            <XylophoneType
              key={"B5"}
              title={"B5"}
              onClick={() => setB5()}
              active={true}
            />
            <XylophoneType
              key={"C6"}
              title={"C6"}
              onClick={() => setC6()}
              active={true}
            />
            <XylophoneType
              key={"D6"}
              title={"D6"}
              onClick={() => setD6()}
              active={true}
            />
            <XylophoneType
              key={"E6"}
              title={"E6"}
              onClick={() => setE6()}
              active={true}
            />
                        <XylophoneType
              key={"F6"}
              title={"F6"}
              onClick={() => setF6()}
              active={true}
            />
            <XylophoneType
              key={"G6"}
              title={"G6"}
              onClick={() => setG6()}
              active={true}
            />
            <XylophoneType
              key={"A6"}
              title={"A6"}
              onClick={() => setA6()}
              active={true}
            />
            <XylophoneType
              key={"B6"}
              title={"B6"}
              onClick={() => setB6()}
              active={true}
            />
            <XylophoneType
              key={"C7"}
              title={"C7"}
              onClick={() => setC7()}
              active={true}
            />
                        <XylophoneType
              key={"D7"}
              title={"D7"}
              onClick={() => setD7()}
              active={true}
            />
            <XylophoneType
              key={"E7"}
              title={"E7"}
              onClick={() => setE7()}
              active={true}
            />
            <XylophoneType
              key={"F7"}
              title={"F7"}
              onClick={() => setF7()}
              active={true}
            />
            <XylophoneType
              key={"G7"}
              title={"G7"}
              onClick={() => setG7()}
              active={true}
            />
            

      </div>

      <div className={'body'}>
        {oscillators.map(o => (
          <XylophoneType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
          
        ))}
      </div>
    </div>
    </div>
    
    
  );
}

const setC5 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["C5"], 0.5);
  return synth;
}

const setD5 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["D5"], 0.5);
  return synth;
}

const setE5 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["E5"], 0.5);
  return synth;
}
const setF5 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["F5"], 0.5);
  return synth;
}

const setG5 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["G5"], 0.5);
  return synth;
}

const setA5 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["A5"], 0.5);
  return synth;
}
const setB5 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["B5"], 0.5);
  return synth;
}
const setC6 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["C6"], 0.5);
  return synth;
}

const setD6 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["D6"], 0.5);
  return synth;
}

const setE6 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["E6"], 0.5);
  return synth;
}
const setF6 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["F6"], 0.5);
  return synth;
}

const setG6 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["G6"], 0.5);
  return synth;
}

const setA6 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["A6"], 0.5);
  return synth;
}
const setB6 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["B6"], 0.5);
  return synth;
}
const setC7 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["C7"], 0.5);
  return synth;
}

const setD7 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["D7"], 0.5);
  return synth;
}

const setE7 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["E7"], 0.5);
  return synth;
}
const setF7 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["F7"], 0.5);
  return synth;
}

const setG7 = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["G7"], 0.5);
  return synth;
}

// sharp keys here

const setC5S = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["C#5"], 0.5);
  return synth;
}

const setD5S = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["D#5"], 0.5);
  return synth;
}

const setF5S = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["F#5"], 0.5);
  return synth;
}
const setG5S = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["G#5"], 0.5);
  return synth;
}

const setA5S = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["A#5"], 0.5);
  return synth;
}

const setC6S = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["C#6"], 0.5);
  return synth;
}
const setD6S = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["D#6"], 0.5);
  return synth;
}
const setF6S = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["F#6"], 0.5);
  return synth;
}

const setG6S = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["G#6"], 0.5);
  return synth;
}

const setA6S = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["A#6"], 0.5);
  return synth;
}
const setC7S = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["c#7"], 0.5);
  return synth;
}

const setD7S = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["D#7"], 0.5);
  return synth;
}

const setF7S = () => {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: 100 })
  synth.triggerAttackRelease(["F#7"], 0.5);
  return synth;
}





export const XylophoneInstrument = new Instrument('Xylophone', Xylophone);
