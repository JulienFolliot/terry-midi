import { Component, OnInit } from '@angular/core';
import { Midi, MidiJSON } from '@tonejs/midi'

@Component({
  selector: 'app-lowvelocity',
  templateUrl: './lowvelocity.component.html',
  styleUrls: ['./lowvelocity.component.scss']
})
export class LowVelocityComponent implements OnInit {

  isLoading = false;
  fileName = '';
  workingMidiFile : Midi = new Midi();
  velocityThreshold = 0.5;
  upperVelocityCount = 0;
  lowerVelocityCount = 0;

  constructor() { }

  ngOnInit() {
    this.isLoading = false;
  }

  onFileSelected(event: any) {

    if (event != null) {
      const file:File = event.target.files[0];
  
      if (file) {
  
          this.fileName = file.name;

          
          const formData = new FormData();
          
          formData.append("thumbnail", file);

          const reader = new FileReader();
          reader.onload = (evt: any) => {
            const midiFileAsUrl = evt.target.result;
            Midi.fromUrl(midiFileAsUrl).then(midiFile => {

              this.workingMidiFile = midiFile.clone();

              this.workingMidiFile.tracks.forEach(track => {
                track.notes.forEach(note => {
                  if(note.velocity > this.velocityThreshold) {
                    this.upperVelocityCount++;
                  }
                  else {
                    this.lowerVelocityCount++;
                  }
                })
              });

              console.log("Note correctes : ", this.upperVelocityCount);
              console.log("Ghosts notes : ", this.lowerVelocityCount);

              console.log("Midi file duration", midiFile.duration);
            });

          };
          reader.readAsDataURL(file);
          
          
      }
    }
}
}
