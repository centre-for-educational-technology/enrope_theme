var particles = Particles.init({
  selector: '.background',
  color: ['#24cc85', '#6cb6ff', '#80ffff'],
  connectParticles: true,
  maxParticles: 200,
  sizeVariations: 6,

  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 100,
      }
    }, {
      breakpoint: 425,
      options: {
        maxParticles: 50,
      }

    }, {
      breakpoint: 320,
      options: {
        maxParticles: 25
    }
  }
  ]
});