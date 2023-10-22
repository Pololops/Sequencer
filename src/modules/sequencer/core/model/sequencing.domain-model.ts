export namespace SequencingDomainModel {
  export interface Instrument {
    id: number
    name: string
    description: string
    type: string
    audioURL: string
  }

  export interface Pad {
    isActive: boolean
  }

  export interface Sequence {
    instrument: Instrument
    pads: Pad[]
  }

  export interface Sequencer {
    tempo: number
    timeBase: number
    sequences: Sequence[]
  }
}


// Create un audio object for each instrument
// Path: src/modules/instrument/core/model/instrument.domain-model.ts
// import drumKickAudioFile from 'src/assets/audio/DrumKick.mp3';

// export const DrumKick: InstrumentDomainModel.Instrument = {
//   id: 1,
//   name: InstrumentDomainModel.InstrumentName.DrumKick,
//   description: 'Drum Kick',
//   type: 'Drum',
//   audio: new AudioContext(drumKickAudioFile),
// };