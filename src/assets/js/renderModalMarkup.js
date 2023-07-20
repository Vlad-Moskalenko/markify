export function renderModalMarkup(card) {
  if (card === 1) {
    return `
      <ul class="modal__list">
        <li class="modal__item">Dry and in times of need – cleanliness of the steel and walls in the wake of the saw;</li>
        <li class="modal__item">Cleaning and mittya windows, balconies and loggias, all mirror surfaces;</li>
        <li class="modal__item">Matte of wall and floor tiles, scorched radiators, plinths;</li>
        <li class="modal__item">If there are furniture in the premises, including softwood – 
        cleaning of all types of furniture in the form of pollution and covering 
        with special anti-static protections is carried out;</li>
        <li class="modal__item">The cleaning of important areas is carried out with the help of a 
        professional steam generator with a disinfectant effect.</li>
      </ul>
    `;
  }

  if (card === 2) {
    return `
      <ul class="modal__list">
        <li class="modal__item">You can not worry that at the end of cleaning cracks and chips will appear on the surface. 
        Thanks to the use of modern equipment and high-quality detergents, glass showcases will be in complete safety;</li>
        <li class="modal__item">Possibility of ordering services at any time of the year. Our masters are ready to arrive 
        at any hour and day convenient for you, regardless of the period of the year.;</li>
        <li class="modal__item">Providing guarantees. A contract for the provision of services will be concluded with each client. 
        You can be sure that the work will be done at the highest level;</li>
      </ul>
    `;
  }

  if (card === 3) {
    return `
      <ul class="modal__list">
        <li class="modal__item">Cleaning, packaging, removal of construction waste and preliminary cleaning of the premises;</li>
        <li class="modal__item">We are removing building dust from all surfaces with a professional vacuum cleaner and specialized tools;</li>
        <li class="modal__item">We are removing residues of building materials from all surfaces, removing stains;</li>
        <li class="modal__item">Washing and rubbing floors, if necessary - grinding the floor covering;</li>
        <li class="modal__item">Wet cleaning of all surfaces, as well as furniture inside and out;</li>
        <li class="modal__item">Washing and cleaning of bathrooms with disinfection;</li>
      </ul>
    `;
  }

  if (card === 4) {
    return `
      <ul class="modal__list">
        <li class="modal__item">At Chem-Dry, we don’t need gallons of soapy water or harsh chemicals to deep clean upholstery. 
        Instead, we harness the natural cleaning power of carbonation;</li>
        <li class="modal__item">Because our carpet cleaners use a fraction of the water used by steam cleaners, 
        furniture dries in a matter of hours instead of days;</li>
        <li class="modal__item">Cleaning service is a professional, fully equipped, 
        trusted and well-trained carpet Cleaning Professionals will show up at your doorstep;</li>
        <li class="modal__item">Our goal is to clean carpets, rugs and upholstery to your 
        satisfaction to restore them to their original appearance;</li>
      </ul>
    `;
  }
}
