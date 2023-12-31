import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{

/* browns */
--brown-50: #f9f5ed;
--brown-100: #f2e6cf;
--brown-200: #e6cca2;
--brown-300: #d7ab6d;
--brown-400: #c98a40; /*main*/
--brown-500: #bb7937; 
--brown-600: #a15d2d;
--brown-700: #814527;
--brown-800: #6c3a27;
--brown-900: #5d3226;
--brown-950: #361912;

/* yellows */
--yellow-50: #fffdea;
--yellow-100: #fff9c5;
--yellow-200: #fff386;
--yellow-300: #ffe647;
--yellow-400: #ffd61d;
--yellow-500: #fdba10; /*main*/
--yellow-600: #e08c00;
--yellow-700: #ba6203;
--yellow-800: #964b0a;
--yellow-900: #7c3e0b;
--yellow-950: #471f01;


/* greys */
  --grey-100: hsla(0, 0%, 100%, 1);
  --grey-200: hsla(0, 0%, 81%, 1);
  --grey-300: hsla(0, 0%, 71%, 1);
  --grey-400: hsla(0, 0%, 61%, 1);
  --grey-500: hsla(0, 0%, 51%, 1);
  --grey-600: hsla(0, 0%, 41%, 1);
  --grey-700: hsla(0, 0%, 31%, 1);
  --grey-800: hsla(0, 0%, 21%, 1);
  --grey-900: hsla(0, 0%, 11%, 1);


/* spacing */
  --spacing-00: 0;
  --spacing-05: 0.125rem;
  --spacing-10: 0.25rem;
  --spacing-15: 0.375rem;
  --spacing-20: 0.5rem;
  --spacing-25: 0.625rem;
  --spacing-30: 0.75rem;
  --spacing-35: 0.875rem;
  --spacing-40: 1rem;
  --spacing-50: 1.25rem;
  --spacing-60: 1.5rem;
  --spacing-70: 1.75rem;
  --spacing-80: 2rem;
  --spacing-90: 2.25rem;
  --spacing-100: 2.5rem;
  --spacing-110: 2.75rem;
  --spacing-120: 3rem;
  --spacing-130: 3.25rem;
  --spacing-140: 3.5rem;
  --spacing-160: 4rem;
  --spacing-200: 5rem;
  --spacing-240: 6rem;
  --spacing-280: 7rem;
  --spacing-320: 8rem;
  --spacing-360: 9rem;
  --spacing-400: 10rem;
  --spacing-440: 11rem;
  --spacing-480: 12rem;
  --spacing-520: 13rem;
  --spacing-560: 14rem;
  --spacing-600: 15rem;
  --spacing-640: 16rem;
  --spacing-720: 18rem;
  --spacing-800: 20rem;
  --spacing-960: 24rem;


}

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}

/*
  2. Remove default margin and padding
*/
* {
  margin: 0;
  padding: 0;

}

/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}

/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Sen', sans-serif;
}

/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}

/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyles;
