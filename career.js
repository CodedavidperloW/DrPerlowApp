function animateCounter() {
    const counters = document.querySelectorAll('.counter');
    const speed = 700; // Adjust the animation speed (lower value means faster animation)
  
    counters.forEach(counter => {
      const target = +counter.dataset.count;
      const increment = target / speed;
  
      const updateCount = () => {
        const value = +counter.innerText;
        if (value < target) {
          counter.innerText = Math.ceil(value + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  }
  
  animateCounter();