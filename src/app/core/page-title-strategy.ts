import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { setPageName } from '../utils/set-page-name';

@Injectable({ providedIn: 'root' })
export class PageTitleStrategy extends TitleStrategy {
  title = inject(Title);

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title) {
      this.title.setTitle(setPageName(title));
    }
  }
}
