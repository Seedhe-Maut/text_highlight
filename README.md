📋 React Two-Column Medical Report
A lightweight, dependency-free React component that displays clinical bullet points on the left and a flowing prose paragraph on the right.
Click any bullet to highlight the matching sentence inside the paragraph and smooth-scroll it into view.


✨ Features

    Left column – standalone bullet list (short clinical points).
    Right column – single paragraph with every bullet embedded plus extra narrative/context.
    Click-to-highlight – native scrollIntoView({ behavior: 'smooth' }).
    Responsive – collapses to one column on small screens.
    Zero dependencies – only React + CSS.

🚀 Quick Start

    git clone --this repo--
    cd --this repo--
    npm install
    npm start/ npm run dev
    
Open http://localhost:3000 and click any bullet.

📁 Project Structure

src/

├─ components/

│  ├─ TwoColumnText.jsx   # main component

│  └─ TwoColumnText.css   # styles + responsive rules

└─ App.js                 # demo usage
