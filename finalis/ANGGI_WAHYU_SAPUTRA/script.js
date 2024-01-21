const lazyImages = document.querySelectorAll(".lazy");
const firsAnimation = document.querySelectorAll(".first-animation")
const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.1 // Specify the threshold for intersection
};
const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute("data-src");
            img.src = src;
            entry.target.removeAttribute("data-src")
            observer.unobserve(img);

        }
    });
};
const observer = new IntersectionObserver(handleIntersection, options);
lazyImages.forEach((image) => {
    observer.observe(image);
});

