import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements AfterViewInit {
  @ViewChild('slot1', { read: ElementRef, static: true }) slot1: ElementRef;
  @ViewChild('slot2', { read: ElementRef, static: true }) slot2: ElementRef;
  @ViewChild('slot3', { read: ElementRef, static: true }) slot3: ElementRef;
  @ViewChild('slot4', { read: ElementRef, static: true }) slot4: ElementRef;
  @ViewChild('slot5', { read: ElementRef, static: true }) slot5: ElementRef;
  @ViewChild('slot6', { read: ElementRef, static: true }) slot6: ElementRef;
  anim: Animation;
  anim2: Animation;
  anim3: Animation;
  anim4: Animation;
  anim5: Animation;

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    const Animation = this.animationCtrl
      .create()
      .addElement(this.slot1.nativeElement)
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(-200px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1');

    const anim = this.animationCtrl
      .create()
      .addElement(this.slot2.nativeElement)
      .delay(1000)
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(200px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1');

    const anim2 = this.animationCtrl
      .create()
      .addElement(this.slot3.nativeElement)
      .delay(2000)
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(-200px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1');
    const anim3 = this.animationCtrl
      .create()
      .addElement(this.slot4.nativeElement)
      .delay(3000)
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(200px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1');
    const anim4 = this.animationCtrl
      .create()
      .addElement(this.slot5.nativeElement)
      .delay(4000)
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(-200px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1');
    const anim5 = this.animationCtrl
      .create()
      .addElement(this.slot6.nativeElement)
      .delay(5000)
      .duration(1500)
      .iterations(1)
      .fromTo('opacity', '0', '1');

    anim.play();
    anim2.play();
    anim3.play();
    anim4.play();
    anim5.play();
    Animation.play();
  }
}
