var particles = Particles.init({
  selector: '.background',
  color: ['#24cc85', '#96ABFE', '#83CC6A'],
  connectParticles: true,
  maxParticles: 100,
  sizeVariations: 20,

  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 40,
      }
    }, {
      breakpoint: 425,
      options: {
        maxParticles: 30,
      }

    }, {
      breakpoint: 320,
      options: {
        maxParticles: 20
    }
  }
  ]
});