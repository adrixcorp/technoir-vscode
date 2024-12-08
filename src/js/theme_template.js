(function () {
  //====================================
  // Theme replacement CSS (Glow styles)
  //====================================
  const tokenReplacements = {
    /* Custom glow styles for your colors */
    '3aafff': "color: #3aafff; text-shadow: 0 0 2px #000, 0 0 5px #3aafff55, 0 0 10px #3aafff55, 0 0 15px #3aafff55; backface-visibility: hidden;",
    'a1784c': "color: #a1784c; text-shadow: 0 0 2px #000, 0 0 5px #a1784c55, 0 0 10px #a1784c55, 0 0 15px #a1784c55; backface-visibility: hidden;",
    'aaafeb': "color: #aaafeb; text-shadow: 0 0 2px #000, 0 0 5px #aaafeb55, 0 0 10px #aaafeb55, 0 0 15px #aaafeb55; backface-visibility: hidden;",
    '8fc2bb': "color: #8fc2bb; text-shadow: 0 0 2px #000, 0 0 5px #8fc2bb55, 0 0 10px #8fc2bb55, 0 0 15px #8fc2bb55; backface-visibility: hidden;",
    '22ff99': "color: #22ff99; text-shadow: 0 0 2px #000, 0 0 5px #22ff9955, 0 0 10px #22ff9955, 0 0 15px #22ff9955; backface-visibility: hidden;",
    'bdbe82': "color: #bdbe82; text-shadow: 0 0 2px #000, 0 0 5px #bdbe8255, 0 0 10px #bdbe8255, 0 0 15px #bdbe8255; backface-visibility: hidden;",
    '8b6ccf': "color: #8b6ccf; text-shadow: 0 0 2px #000, 0 0 5px #8b6ccf55, 0 0 10px #8b6ccf55, 0 0 15px #8b6ccf55; backface-visibility: hidden;",
    'adaeb2': "color: #adaeb2; text-shadow: 0 0 2px #000, 0 0 5px #adaeb255, 0 0 10px #adaeb255, 0 0 15px #adaeb255; backface-visibility: hidden;",
    'bbdfdd': "color: #bbdfdd; text-shadow: 0 0 2px #000, 0 0 5px #bbdfdd55, 0 0 10px #bbdfdd55, 0 0 15px #bbdfdd55; backface-visibility: hidden;",
    '33b6a9': "color: #33b6a9; text-shadow: 0 0 2px #000, 0 0 5px #33b6a955, 0 0 10px #33b6a955, 0 0 15px #33b6a955; backface-visibility: hidden;",
    'bb7dbf': "color: #bb7dbf; text-shadow: 0 0 2px #000, 0 0 5px #bb7dbf55, 0 0 10px #bb7dbf55, 0 0 15px #bb7dbf55; backface-visibility: hidden;",
    'af77a9': "color: #af77a9; text-shadow: 0 0 2px #000, 0 0 5px #af77a955, 0 0 10px #af77a955, 0 0 15px #af77a955; backface-visibility: hidden;",
    'b998df': "color: #b998df; text-shadow: 0 0 2px #000, 0 0 5px #b998df55, 0 0 10px #b998df55, 0 0 15px #b998df55; backface-visibility: hidden;",
    '49a6d2': "color: #49a6d2; text-shadow: 0 0 2px #000, 0 0 5px #49a6d255, 0 0 10px #49a6d255, 0 0 15px #49a6d255; backface-visibility: hidden;",
    '12ffa9': "color: #12ffa9; text-shadow: 0 0 2px #000, 0 0 5px #12ffa955, 0 0 10px #12ffa955, 0 0 15px #12ffa955; backface-visibility: hidden;",
    'dfb3ac': "color: #dfb3ac; text-shadow: 0 0 2px #000, 0 0 5px #dfb3ac55, 0 0 10px #dfb3ac55, 0 0 15px #dfb3ac55; backface-visibility: hidden;",
    'e3e4a9': "color: #e3e4a9; text-shadow: 0 0 2px #000, 0 0 5px #e3e4a955, 0 0 10px #e3e4a955, 0 0 15px #e3e4a955; backface-visibility: hidden;",
    'a5df93': "color: #a5df93; text-shadow: 0 0 2px #000, 0 0 5px #a5df9355, 0 0 10px #a5df9355, 0 0 15px #a5df9355; backface-visibility: hidden;",
    '4986c2': "color: #4986c2; text-shadow: 0 0 2px #000, 0 0 5px #4986c255, 0 0 10px #4986c255, 0 0 15px #4986c255; backface-visibility: hidden;",
    'ff4377': "color: #ff4377; text-shadow: 0 0 2px #000, 0 0 5px #ff437755, 0 0 10px #ff437755, 0 0 15px #ff437755; backface-visibility: hidden;",
    'ef6aa7': "color: #ef6aa7; text-shadow: 0 0 2px #000, 0 0 5px #ef6aa755, 0 0 10px #ef6aa755, 0 0 15px #ef6aa755; backface-visibility: hidden;",
    'dfdfd5': "color: #dfdfd5; text-shadow: 0 0 2px #000, 0 0 5px #dfdfd555, 0 0 10px #dfdfd555, 0 0 15px #dfdfd555; backface-visibility: hidden;",
    '3399ff': "color: #3399ff; text-shadow: 0 0 2px #000, 0 0 5px #3399ff55, 0 0 10px #3399ff55, 0 0 15px #3399ff55; backface-visibility: hidden;"
  };

  //=============================
  // Helper functions
  //=============================

  const themeStylesExist = (tokensEl, replacements) => {
    return tokensEl.innerText !== '' &&
      Object.keys(replacements).every(color => {
        return tokensEl.innerText.toLowerCase().includes(`#${color}`);
      });
  };

  const replaceTokens = (styles, replacements) => Object.keys(replacements).reduce((acc, color) => {
    const re = new RegExp(`color: #${color};`, 'gi');
    return acc.replace(re, replacements[color]);
  }, styles);

  const usingTechnoir = () => {
    const appliedTheme = document.querySelector('[class*="theme-json"]');
    const technoirTheme = document.querySelector('[class*="AdrixCorp-technoir-vscode-themes"]');
    return appliedTheme && technoirTheme;
  }

  const readyForReplacement = (tokensEl, tokenReplacements) => tokensEl
    ? (
      usingTechnoir() &&
      themeStylesExist(tokensEl, tokenReplacements)
    )
    : false;

  const initNeonDreams = (disableGlow, obs) => {
    const tokensEl = document.querySelector('.vscode-tokens-styles');

    if (!tokensEl || !readyForReplacement(tokensEl, tokenReplacements)) {
      return;
    }

    const initialThemeStyles = tokensEl.innerText;

    let updatedThemeStyles = !disableGlow
      ? replaceTokens(initialThemeStyles, tokenReplacements)
      : initialThemeStyles;

    /* append the remaining styles */
    updatedThemeStyles = `${updatedThemeStyles}`;

    const newStyleTag = document.createElement('style');
    newStyleTag.setAttribute("id", "technoir-theme-styles");
    newStyleTag.innerText = updatedThemeStyles.replace(/(\r\n|\n|\r)/gm, '');
    document.body.appendChild(newStyleTag);

    console.log('Technoir: NEON DREAMS initialised!');

    if (obs) {
      obs.disconnect();
      obs = null;
    }
  };

  const watchForBootstrap = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'attributes') {
        const tokensEl = document.querySelector('.vscode-tokens-styles');
        if (readyForReplacement(tokensEl, tokenReplacements)) {
          initNeonDreams(false, observer);
        } else {
          observer.disconnect();
          observer.observe(tokensEl, { childList: true });
        }
      }
      if (mutation.type === 'childList') {
        const tokensEl = document.querySelector('.vscode-tokens-styles');
        if (readyForReplacement(tokensEl, tokenReplacements)) {
          initNeonDreams(false, observer);
        }
      }
    }
  };

  //=============================
  // Start bootstrapping!
  //=============================
  initNeonDreams(false);
  const bodyNode = document.querySelector('body');
  const observer = new MutationObserver(watchForBootstrap);
  observer.observe(bodyNode, { attributes: true });
})();
