📋 React Two-Column Medical Report
A lightweight, dependency-free React component that displays clinical bullet points on the left and a flowing prose paragraph on the right.
Click any bullet to highlight the matching sentence inside the paragraph and smooth-scroll it into view.
✨ Features

    Standalone bullet list (left) – short clinical phrases.
    Single prose paragraph (right) – bullets embedded with extra context.
    Click-to-highlight – exact clause lights up and centres automatically.
    Responsive – stacks to one column on small screens.
    Zero dependencies – only React + CSS.

🚀 Quick Start

    Install (if you don’t have a React app yet)

npx create-react-app my-report
cd my-report

    Copy files
    Place TwoColumnText.jsx and TwoColumnText.css inside src/components/.
    Use the component

// src/App.js
import React from "react";
import TwoColumnText from "./components/TwoColumnText";

function App() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Discharge Summary</h1>
      <TwoColumnText />
    </main>
  );
}

export default App;

    Run
npm start

