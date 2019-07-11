const codeAnimation = [
  {
    name: "heartBeat",
    clx: `
    .heartBeat {
      -webkit-animation-name: heartBeat;
      animation-name: heartBeat;
      -webkit-animation-duration: 4s;
      animation-duration: 4s;
    }`,
    keyframe: `
    @-webkit-keyframes heartBeat {
      0% { -webkit-transform: scale(1); }
      5% { -webkit-transform: scale(1.1); }
   
      10% { -webkit-transform: scale(1); }
      15% { -webkit-transform: scale(1.1); }
   
      20% { -webkit-transform: scale(1); }
      25% { -webkit-transform: scale(1.1); }
   
      30% { -webkit-transform: scale(1); }
      35% { -webkit-transform: scale(1.1); }
   
      40% { -webkit-transform: scale(1); }
      45% { -webkit-transform: scale(1.1); }
   
      50% { -webkit-transform: scale(1); }
      55% { -webkit-transform: scale(1.1); }
   
      60% { -webkit-transform: scale(1); }
      65% { -webkit-transform: scale(1.1); }
   
      70% { -webkit-transform: scale(1); }
      75% { -webkit-transform: scale(1.1); }
   
      80% { -webkit-transform: scale(1); }
      85% { -webkit-transform: scale(1.1); }
   
      90% { -webkit-transform: scale(1); }
      95% { -webkit-transform: scale(1.1); }
   
      100% { -webkit-transform: scale(1); }
    }
   
    @keyframes heartBeat {
      0% { transform: scale(1); }
      5% { transform: scale(1.1); }
   
      10% { transform: scale(1); }
      15% { transform: scale(1.1); }
   
      20% { transform: scale(1); }
      25% { transform: scale(1.1); }
   
      30% { transform: scale(1); }
      35% { transform: scale(1.1); }
   
      40% { transform: scale(1); }
      45% { transform: scale(1.1); }
   
      50% { transform: scale(1); }
      55% { transform: scale(1.1); }
   
      60% { transform: scale(1); }
      65% { transform: scale(1.1); }
   
      70% { transform: scale(1); }
      75% { transform: scale(1.1); }
   
      80% { transform: scale(1); }
      85% { transform: scale(1.1); }
   
      90% { transform: scale(1); }
      95% { transform: scale(1.1); }
   
      100% { transform: scale(1); }
    }`
  },
  {
    name: "spin",
    clx: `
    .spin {
      animation: spin infinite 20s linear;
    }`,
    keyframe: `
    @-webkit-keyframes spin {
      from { -webkit-transform: rotate(0deg); }
      to { -webkit-transform: rotate(360deg); }
    }
    
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }`
  },
  {
    name: "flipInX",
    clx: `
    .flipInX {
      -webkit-backface-visibility: visible !important;
      -webkit-animation-name: flipInX;
      backface-visibility: visible !important;
      animation-name: flipInX;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
    }`,
    keyframe: `
    @-webkit-keyframes flipInX {
      0% { -webkit-transform: perspective(400px) rotateX(90deg); opacity: 0; }
      40% { -webkit-transform: perspective(400px) rotateX(-10deg); }
      70% { -webkit-transform: perspective(400px) rotateX(10deg); }
      100% { -webkit-transform: perspective(400px) rotateX(0deg); opacity: 1; }
    }
    
    @keyframes flipInX {
      0% { transform: perspective(400px) rotateX(90deg);  opacity: 0; }
      40% { transform: perspective(400px) rotateX(-10deg); }
      70% { transform: perspective(400px) rotateX(10deg); }
      100% { transform: perspective(400px) rotateX(0deg); opacity: 1; }
    }`
  },
  {
    name: "flipInY",
    clx: `
    .flipInY {
      -webkit-backface-visibility: visible !important;
      -webkit-animation-name: flipInY;
      backface-visibility: visible !important;
      animation-name: flipInY;
      -webkit-animation-duration: 2s;
      animation-duration: 2s;
    }`,
    keyframe: `
    @-webkit-keyframes flipInY {
      0% { -webkit-transform: perspective(400px) rotateY(90deg); opacity: 0; }
      40% { -webkit-transform: perspective(400px) rotateY(-10deg); }
      70% { -webkit-transform: perspective(400px) rotateY(10deg); }
      100% { -webkit-transform: perspective(400px) rotateY(0deg); opacity: 1; }
    }
    
    @keyframes flipInY {
      0% { transform: perspective(400px) rotatey(90deg); opacity: 0; }
      40% { transform: perspective(400px) rotatey(-10deg); }
      70% { transform: perspective(400px) rotatey(10deg); }
      100% { transform: perspective(400px) rotatey(0deg); opacity: 1; }
    }`
  },
  {
    name: "bounce",
    clx: `
    .bounce { 
      -webkit-animation-name: bounce; 
      animation-name: bounce; 
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
    }`,
    keyframe: `
    @-webkit-keyframes bounce { 
      0%, 20%, 50%, 80%, 100% { -webkit-transform: translateY(0); } 
      40% { -webkit-transform: translateY(-30px); } 
      60% { -webkit-transform: translateY(-15px); } 
    } 
   
    @keyframes bounce { 
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 
      40% { transform: translateY(-30px); } 
      60% { transform: translateY(-15px); } 
    }`
  },
  {
    name: "fadeIn",
    clx: `
    .fadeIn {
      -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
      -webkit-animation-duration: 4s;
      animation-duration: 4s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }`,
    keyframe: `
    @-webkit-keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
   
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }`
  },
  {
    name: "fadeOut",
    clx: `
    .fadeOut {
      -webkit-animation-name: fadeOut;
      animation-name: fadeOut;
      -webkit-animation-duration: 4s;
      animation-duration: 4s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }`,
    keyframe: `
    @-webkit-keyframes fadeOut {
      from { opacity: 1; } 
      to { opacity:0; }
    }
      
    @keyframes fadeOut {
      from { opacity: 1; } 
      to { opacity: 0; }
    }`
  },
  {
    name: "rotate-x180",
    clx: `
    .rotate-x180 {
      -webkit-animation-name: rotate-x180;
      animation-name: rotate-x180;
      -webkit-animation-duration: 2s;
      animation-duration: 2s;
    }`,
    keyframe: `
    @-webkit-keyframes rotate-x180 {
      from { -webkit-transform: rotateX(0); }
      to { -webkit-transform: rotateX(180deg); }
    }
   
    @keyframes rotate-x180 {
      from { transform:rotateX(0); }
      to { transform:rotateX(180deg); }
    }`
  },
  {
    name: "rotate-x360",
    clx: `
    .rotate-x360 {
      -webkit-animation-name: rotate-x360;
      animation-name: rotate-x360;
      -webkit-animation-duration: 2s;
      animation-duration: 2s;
    }`,
    keyframe: `
    @-webkit-keyframes rotate-x360 {
      from { -webkit-transform: rotateX(0); }
      to { -webkit-transform: rotateX(360deg); }
    }
   
    @keyframes rotate-x360 {
      from { transform:rotateX(0); }
      to { transform:rotateX(360deg); }
    }`
  },
  {
    name: "rotate-y180",
    clx: `
    .rotate-y180 {
      -webkit-animation-name: rotate-y180;
      animation-name: rotate-y180;
      -webkit-animation-duration: 2s;
      animation-duration: 2s;
    }`,
    keyframe: `
    @-webkit-keyframes rotate-y180 {
      from { -webkit-transform: rotateY(0); }
      to { -webkit-transform: rotateY(180deg); }
    }
   
    @keyframes rotate-y180 {
      from { transform:rotateY(0); }
      to { transform:rotateY(180deg); }
    }`
  },
  {
    name: "rotate-y360",
    clx: `
    .rotate-y360 {
      -webkit-animation-name: rotate-y360;
      animation-name: rotate-y360;
      -webkit-animation-duration: 2s;
      animation-duration: 2s;
    }`,
    keyframe: `
    @-webkit-keyframes rotate-y360 {
      from { -webkit-transform: rotateY(0); }
      to { -webkit-transform: rotateY(360deg); }
    }
   
    @keyframes rotate-y360 {
      from { transform:rotateY(0); }
      to { transform:rotateY(360deg); }
    }`
  },
  {
    name: "pulse",
    clx: `
    .pulse {
      -webkit-animation-name: pulse;
      animation-name: pulse;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
    }`,
    keyframe: `
    @-webkit-keyframes pulse {
      0% { -webkit-transform: scale(1); }
      50% { -webkit-transform: scale(1.1); }
      100% { -webkit-transform: scale(1); }
    }
   
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
   `
  },
  {
    name: "shake",
    clx: `
    .shake { 
      -webkit-animation-name: shake; 
      animation-name: shake; 
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
    }`,
    keyframe: `
    @-webkit-keyframes shake {
      0%, 100% { -webkit-transform: translateX(0); } 
      10%, 30%, 50%, 70%, 90% { -webkit-transform: translateX(-10px); } 
      20%, 40%, 60%, 80% { -webkit-transform: translateX(10px); } 
    }
   
    @keyframes shake { 
      0%, 100% { transform: translateX(0); } 
      10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); } 
      20%, 40%, 60%, 80% { transform: translateX(10px); } 
    }`
  },
  {
    name: "shake-right",
    clx: `
    .shake-right { 
      -webkit-animation-name: shake; 
      animation-name: shake; 
      -webkit-animation-duration: 3s;
      animation-duration: 3s;
    }`,
    keyframe: `
    @-webkit-keyframes shake-right {
      from { -webkit-transform: translateX(0); }    
      to { -webkit-transform: translateX(10px); } 
    }
   
    @keyframes shake-right { 
      from { transform: translateX(0); }    
      to { transform: translateX(10px); } 
    }`
  },
  {
    name: "textExpand",
    clx: `
    .textExpand {
      -webkit-animation-name: textExpand;
      animation-name: textExpand;
      -webkit-animation-duration: 4s;
      animation-duration: 4s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }`,
    keyframe: `
    @-webkit-keyframes textExpand {
      0% { letter-spacing: -0.5em; opacity: 0; }
      50% { letter-spacing: 0; }
      100% { opacity: 1; }
    }
   
    @keyframes textExpand {
      0% { letter-spacing: -0.5em; opacity: 0; }
      50% { letter-spacing: 0; }
      100% { opacity: 1; }
    }`
  },
];


export default codeAnimation;
