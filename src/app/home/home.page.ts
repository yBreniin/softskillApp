import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { AnimationController, ModalController } from '@ionic/angular';
import { DetalhesPage } from '../temas/detalhes/detalhes.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('title', { read: ElementRef, static: true }) title: ElementRef;
  anim: Animation;

  constructor(
    private animationCtrl: AnimationController,
    private modalController: ModalController
  ) {}

  ngAfterViewInit() {
    const Animation = this.animationCtrl
      .create()
      .addElement(this.title.nativeElement)
      .duration(1500)
      .iterations(3)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: 1 },
        { offset: 0.5, transform: 'scale(1.2)', opacity: 0.3 },
        { offset: 1, transform: 'scale(1)', opacity: 1 },
      ]);

    Animation.play();
  }

  async presentModal() {
    const enterAnimation = (baseEl: any) => {
      const root = baseEl.shadowRoot;

      const backdropAnimation = this.animationCtrl
        .create()
        .addElement(root.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl
        .create()
        .addElement(root.querySelector('.modal-wrapper')!)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '1', transform: 'scale(1)' },
        ]);

      return this.animationCtrl
        .create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    };

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction('reverse');
    };

    const modal = await this.modalController.create({
      component: DetalhesPage,
      enterAnimation,
      leaveAnimation,
    });
    return await modal.present();
  }
}
