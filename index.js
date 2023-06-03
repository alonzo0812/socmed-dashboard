const root = document.documentElement;
const themeButton = document.getElementById('theme-button');
const themeCircle = document.getElementById('theme-circle');
const themeTitle = document.getElementById('theme-title');
themeButton.addEventListener('click', () => {

  themeTitle.textContent = (themeTitle.textContent === 'Dark Mode') ? 'Light Mode' : 'Dark Mode';
  if(themeTitle.textContent === 'Dark Mode'){
    root.style.setProperty('--background-color', 'hsl(230, 17%, 14%)');
    root.style.setProperty('--topbackground-color', 'hsl(232, 19%, 15%)');
    root.style.setProperty('--card-background', 'hsl(228, 28%, 20%)');
    root.style.setProperty('--primary-text', 'hsl(228, 34%, 66%)');
    root.style.setProperty('--secondary-text', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--button-background', 'linear-gradient(to right,hsl(210, 78%, 56%), hsl(146, 68%, 55%))');
    themeCircle.style.setProperty('left', '25%');
  }
  else{
    root.style.setProperty('--background-color', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--topbackground-color', 'hsl(225, 100%, 98%)');
    root.style.setProperty('--card-background', 'hsl(227, 47%, 96%)');
    root.style.setProperty('--primary-text', 'hsl(228, 12%, 44%)');
    root.style.setProperty('--secondary-text', 'hsl(230, 17%, 14%)');
    root.style.setProperty('--button-background', 'hsl(230, 22%, 74%)');
    themeCircle.style.setProperty('left', '75%');
  }
})

//--background-color: hsl(230, 17%, 14%);
//--topbackground-color: hsl(232, 19%, 15%);
//--card-background: hsl(228, 28%, 20%);
//--primary-text: hsl(228, 34%, 66%);
//--secondary-text: hsl(0, 0%, 100%);

//- White (BG): hsl(0, 0%, 100%)
//- Very Pale Blue (Top BG Pattern): hsl(225, 100%, 98%)
//- Light Grayish Blue (Card BG): hsl(227, 47%, 96%)
//- Dark Grayish Blue (Text): hsl(228, 12%, 44%)
//- Very Dark Blue (Text): hsl(230, 17%, 14%)

//button background linear-gradient(to right,hsl(210, 78%, 56%), hsl(146, 68%, 55%))