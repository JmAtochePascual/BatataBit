const services = document.querySelector('.section-animate');

const triggerAnimate = (entries, observer) => {
  entries.forEach(entry => {
    const children = entry.target.querySelectorAll('[data-anime="animate"]');
    if (entry.isIntersecting) {
      children.forEach(child => child.classList.add('unset'));
      observer.unobserve(entry.target);
    }
  });
};

const options = { threshold: 0.25 };

const observer = new IntersectionObserver(triggerAnimate, options);
observer.observe(services);
