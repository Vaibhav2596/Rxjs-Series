import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Anup');
  videoEmit = new ReplaySubject<string>(3);
  asyncVideoEmit = new AsyncSubject();

    private rendererFactory = inject(RendererFactory2);
  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);

  print(val: any, containerId: string) {
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(containerId)?.appendChild(el);
  }

  print2(val: any, containerId: string) {
    const el = this.renderer.createElement('div');

    this.renderer.addClass(el, 'notification');
    this.renderer.addClass(el, 'd-flex');
    this.renderer.addClass(el, 'align-items-start');

    el.innerHTML = val;

    const parent = document.getElementById(containerId);
    if (parent) {
      this.renderer.insertBefore(parent, el, parent.firstChild);
    }
  }
}
