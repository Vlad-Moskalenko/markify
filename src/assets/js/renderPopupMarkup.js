export function renderPopupMarkup(theme) {
  if (theme === 'form') {
    return `
    <div class="popup__form">
      <h2 class="popup__title">Thank you!</h2>
      <p class="popup__subtitle">We have received your application and will be in touch soon</p>
    </div>
    `;
  }

  if (theme === 'underConstruction') {
    return `
    <div class="popup__underConstruction">
      <h2 class="popup__title">This page is under construction</h2>
      <p class="popup__subtitle">Sorry for the inconvenience! We'll be with you soon.</p>
    </div>
    `;
  }
}
