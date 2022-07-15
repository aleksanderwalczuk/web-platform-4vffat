const observed = document.querySelector('.observed');
const threshold = [];
const results = [];

// fill threshold from 0 to 1 with decimals 0.1, 0.2...
for (let i = 0; i <= 10; i += 1) {
  threshold.push(Math.floor(i) / 10);
}

const options = {
  threshold,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const { time, target, intersectionRatio } = entry;
    const result = {
      visibleTime: target.dataset.lastVisible
        ? Math.floor(time - target.dataset.lastVisible) / 1000 // show time in seconds
        : null,
      coverage: Math.floor(intersectionRatio * 100),
    };
    results.push(result);
    target.dataset.lastVisible = time;
    console.log(results);
  });
}, options);

observer.observe(observed);
