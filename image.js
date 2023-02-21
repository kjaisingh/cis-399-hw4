const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg']

/* Declaring the alternative text for each image file */
const alts = ['Human eye', 'Ocean waves', 'Purple flower', 'Egyptian art', 'Calm butterfly']

/* Looping through images */
for (var i = 0; i < pics.length; i++) {
	const newImage = document.createElement('img');
	newImage.setAttribute('src', pics[i]);
	newImage.setAttribute('alt', alts[i]);
	newImage.onclick = function () {
        displayedImage.src = newImage.src;
        displayedImage.alt = image.alt;
    };
	thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (e) => {
	if (e.target.classList.contains('dark')) {
		e.target.classList.remove('dark');
		e.target.classList.add('light');
		e.currentTarget.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	} else {
		e.target.classList.remove('light');
		e.target.classList.add('dark');
		e.currentTarget.textContent = 'Darken';
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
   }
})