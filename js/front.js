var particles = Particles.init({
  selector: '.background',
  color: ['#24cc85', '#96ABFE', '#83CC6A'],
  connectParticles: true,
  maxParticles: 150,
  sizeVariations: 20,

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