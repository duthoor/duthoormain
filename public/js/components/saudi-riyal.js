class SaudiRiyalImage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const img = document.createElement('img');
    img.src = '/public/images/sar.svg';
    img.alt = 'Saudi Riyal';
    img.style.height = '1em';
    img.style.width = '1em';

    shadow.appendChild(img);
  }
}

customElements.define('saudi-riyal-image', SaudiRiyalImage);
