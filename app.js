const qn = document.querySelectorAll('.qn');
const qnAns = document.querySelectorAll('p');
const iconArrow = document.querySelectorAll('svg');

qn.forEach((div) => {
   div.addEventListener('click', () => {
      // Get refrence to clicked qn element
      const clickQn = div;

      // Find corresponding p element to show / hide
      const ans = clickQn.nextElementSibling;

      // Find corresponding arrow icon of qn

      const arrow = clickQn.firstElementChild;


      // Hide all other p elements
      qnAns.forEach((p) => {
         if (p !== ans && p.classList.contains('ans2')) {
            p.classList.remove('ans2');
         }
      });

      // Show / hide clicked p element
      ans.classList.toggle('ans2');
      // Add boldness to question paragraph when clicked
      clickQn.classList.toggle('qn-after-click');
      // reverse arrow icon when clicked
      arrow.classList.toggle('svg-after-click')

      // Remove transfrom property of other qn which are not clicked

      iconArrow.forEach((svg) => {

         if (svg !== arrow && svg.classList.contains('svg-after-click'))

            svg.classList.remove('svg-after-click');
      });

      // Remove boldness of other qn which are are not clicked
      qn.forEach((div) => {

         if (div !== clickQn && div.classList.contains('qn-after-click')) {

            div.classList.remove('qn-after-click');
         }

      });


   });
});

