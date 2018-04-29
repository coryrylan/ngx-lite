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

export function trapFocus(elm: HTMLElement) {
  const focusableEls = elm.querySelectorAll(
    'a, object, input, button, iframe, [tabindex]'
  );
  const firstFocusableEl = focusableEls[0] as HTMLElement;
  const lastFocusableEl = focusableEls[focusableEls.length - 1] as HTMLElement;
  firstFocusableEl.focus();

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
