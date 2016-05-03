import {Component} from '@angular/core';
import {HeroParentComponent} from './hero-parent.component';
import {NameParentComponent} from './name-parent.component';
import {VersionParentComponent} from './version-parent.component';
import {VoteTakerComponent} from './votetaker.component';
import {CountdownLocalVarParentComponent,
        CountdownViewChildParentComponent} from './countdown-parent.component';
import {MissionControlComponent} from './missioncontrol.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives: [
    HeroParentComponent,
    NameParentComponent,
    VersionParentComponent,
    VoteTakerComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,
    MissionControlComponent
  ]
})
export class AppComponent { }
