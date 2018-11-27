export enum KeyCodes {
  LeftArrow = 37,
  UpArrow = 38,
  RightArrow = 39,
  DownArrow = 40,
  Backspace = 8,
  Tab = 9,
  Enter = 13,
  Escape = 27
}

export function trapTabFocus(elm: HTMLElement) {
  const focusableEls = elm.querySelectorAll(
    'a, object, input, button, iframe, [tabindex]'
  );
  const firstFocusableEl = focusableEls[0] as HTMLElement;
  const lastFocusableEl = focusableEls[focusableEls.length - 1] as HTMLElement;

  // if just a single focusable item focus it
  if (firstFocusableEl) {
    firstFocusableEl.focus();
  }

  // if two or more focusable items create focus loop
  if (firstFocusableEl && lastFocusableEl) {
    elm.addEventListener('keydown', e => {
      const isTabPressed = e.key === 'Tab' || e.keyCode === KeyCodes.Tab;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey && document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      } else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });
  }
}

export function isBrowser() {
  return typeof window !== 'undefined';
}

export function lockScroll() {
  if (isBrowser()) {
    document.body.style.overflow = 'hidden';
  }
}

export function unlockScroll() {
  if (isBrowser()) {
    document.body.style.overflow = 'initial';
  }
}

export function ariaHideBody() {
  if (isBrowser()) {
    document.body.setAttribute('aria-hidden', 'true');
  }
}

export function ariaShowBody() {
  if (isBrowser()) {
    document.body.setAttribute('aria-hidden', 'false');
  }
}
