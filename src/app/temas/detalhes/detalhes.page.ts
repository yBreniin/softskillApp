import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { AnimationController, ModalController } from '@ionic/angular';
import { AutoconfiancaPage } from '../autoconfianca/autoconfianca.page';
import { AutogestaoPage } from '../autogestao/autogestao.page';
import { HonestidadePage } from '../honestidade/honestidade.page';
import { MotivacaoPage } from '../motivacao/motivacao.page';
import { ResilienciaPage } from '../resiliencia/resiliencia.page';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

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

  constructor(
    private animationCtrl: AnimationController,
    private modalController: ModalController,
    private popoverController: PopoverController
  ) {}

  ngAfterViewInit() {
    const Animation = this.animationCtrl
      .create()
      .addElement(this.slot1.nativeElement)
      .duration(500)
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(-200px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1');

    const anim = this.animationCtrl
      .create()
      .addElement(this.slot2.nativeElement)
      .delay(1000)
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(200px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1');

    const anim2 = this.animationCtrl
      .create()
      .addElement(this.slot3.nativeElement)
      .delay(1500)
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(-200px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1');
    const anim3 = this.animationCtrl
      .create()
      .addElement(this.slot4.nativeElement)
      .delay(2000)
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(200px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1');
    const anim4 = this.animationCtrl
      .create()
      .addElement(this.slot5.nativeElement)
      .delay(2500)
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(-200px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1');
    const anim5 = this.animationCtrl
      .create()
      .addElement(this.slot6.nativeElement)
      .delay(3000)
      .duration(1000)
      .iterations(1)
      .fromTo('opacity', '0', '1');

    anim.play();
    anim2.play();
    anim3.play();
    anim4.play();
    anim5.play();
    Animation.play();
  }

  async autoconfianca() {
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
          { offset: 1, opacity: '0.99', transform: 'scale(1)' },
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
      component: AutoconfiancaPage,
      enterAnimation,
      leaveAnimation,
    });
    return await modal.present();
  }

  async autogestao() {
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
          { offset: 1, opacity: '0.99', transform: 'scale(1)' },
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
      component: AutogestaoPage,
      enterAnimation,
      leaveAnimation,
    });
    return await modal.present();
  }

  async honestidade() {
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
          { offset: 1, opacity: '0.99', transform: 'scale(1)' },
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
      component: HonestidadePage,
      enterAnimation,
      leaveAnimation,
    });
    return await modal.present();
  }

  async motivacao() {
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
          { offset: 1, opacity: '0.99', transform: 'scale(1)' },
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
      component: MotivacaoPage,
      enterAnimation,
      leaveAnimation,
    });
    return await modal.present();
  }

  async resiliencia() {
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
          { offset: 1, opacity: '0.99', transform: 'scale(1)' },
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
      component: ResilienciaPage,
      enterAnimation,
      leaveAnimation,
    });
    return await modal.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    await popover.present();
  }
}
