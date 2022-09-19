import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { Midi } from '@tonejs/midi';

@Component({
  selector: 'app-midi-viewer',
  templateUrl: './midi-viewer.component.html',
  styleUrls: ['./midi-viewer.component.scss']
})
export class MidiViewerComponent implements OnInit, OnChanges  {

  @ViewChild('midiviewcanvas', { static: true }) 
  midiViewCanvas: ElementRef<HTMLCanvasElement> | undefined;
  ctx: CanvasRenderingContext2D | undefined | null;

  @Input() originalMidiFile : Midi | undefined;
  @Input() workingMidiFile : Midi | undefined;
  @Input() message: string | undefined;
  @Input() selectedTrack = 0
  columns: {velocity:number, note: number}[] = []

  constructor() { }

  ngOnInit() { 
    this.message = "Component initialized"
    this.ctx = this.midiViewCanvas!!.nativeElement.getContext('2d');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["workingMidiFile"]) {
      this.refreshMidiView();
    } 
  }


  refreshMidiView() {
    if (this.workingMidiFile && this.workingMidiFile.tracks[this.selectedTrack] && this.workingMidiFile.tracks[this.selectedTrack].endOfTrackTicks != undefined && this.workingMidiFile.tracks[this.selectedTrack].endOfTrackTicks!! > 0) {
      const totalTicks = Number(this.workingMidiFile.tracks[this.selectedTrack].endOfTrackTicks);
      for(let i=0; i < totalTicks; i++) {
        this.columns.push({velocity: 0.0, note: 0});
      }
      this.workingMidiFile.tracks[this.selectedTrack].notes.forEach(note => {
        if (this.columns[note.ticks-1]) {
          this.columns[note.ticks-1] = {
            velocity: note.velocity,
            note: note.midi
          }
        }
      })
    }
    console.table(this.columns);
    this.refreshCanvas();
  }

  refreshCanvas() {
    if (this.ctx) {
      console.log("ctx is here");
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect(0, 0, 5, 5);
    }
  }
}
