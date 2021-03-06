const codeAnimation = [
  {
    name: "LeftStretch",
    clx: `
    .LeftStretch{
      animation: LeftStretch 1.5s ease-out;
      -webkit-animation: LeftStretch 1.5s ease-out;	
    
      transform-origin: 100% 0%;
      -webkit-transform-origin: 100% 0%; 
    }`,
    keyframe: `
    @keyframes LeftStretch {
      0% { transform: scaleX(0);	}
      100% { transform: scaleX(1); }			
      80% { transform: scaleX(1.05);	}	
     100% { transform: scaleX(1); }							
    }
   
    @-webkit-keyframes LeftStretch {
     0% { -webkit-transform: scaleX(0); }
     100% { -webkit-transform: scaleX(1); }				
     80% { -webkit-transform: scaleX(1.05);	}
     100% { -webkit-transform: scaleX(1); }			
    }`
  },
  {
    name: "heartBeat",
    clx: `
    .heartBeat {
      animation: heartBeat infinite .5s linear;
      -webkit-animation: heartBeat infinite .5s linear;
    }`,
    keyframe: `
    @-webkit-keyframes heartBeat {
      from { -webkit-transform: scale(1); }
      50% { -webkit-transform: scale(1.1); }
      to { -webkit-transform: scale(1); }
    }
   
    @keyframes heartBeat {
      from { transform: scale(1); }
      50% { transform: scale(1.1); }
      to { transform: scale(1); }
    }`
  },
  {
    name: "bounce",
    clx: `
    .bounce { 
      -webkit-animation-name: bounce; 
      animation-name: bounce; 
      -webkit-animation-duration: 2s;
      animation-duration: 2s;
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
    name: "BounceOutUp",
    clx: `
    .BounceOutUp {
      -webkit-animation-name: BounceOutUp;
      animation-name: BounceOutUp;
      -webkit-animation-duration: 2s;
      animation-duration: 2s;
    }`,
    keyframe: `
    @-webkit-keyframes BounceOutUp {
      20% { -webkit-transform: translate3d(0, -60px, 0); }    
       40%, 45% { opacity: 1; -webkit-transform: translate3d(0, 30px, 0); }    
       100% {opacity: 0; -webkit-transform: translate3d(0, -800px, 0); }
    }
   
    @keyframes BounceOutUp {
      20% { transform: translate3d(0, -60px, 0); }    
      40%, 45% { opacity: 1; transform: translate3d(0, 30px, 0); }    
      100% { opacity: 0; transform: translate3d(0, -800px, 0); }
    }`
  },
  {
    name: "spin",
    clx: `
    .spin {
      -webkit-animation: spin infinite 5s linear;
      animation: spin infinite 5s linear;
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
      backface-visibility: visible !important;
      animation: flipInX 2s;
      -webkit-animation: flipInX 2s;
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
      backface-visibility: visible !important;
      animation: flipInY 2s;
      -webkit-animation: flipInY 2s;
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
    name: "rotateIn",
    clx: `
    .rotateIn {
      animation: rotateIn 3s;
      -webkit-animation: rotateIn 3s;
     
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;	
     
      -webkit-transform-origin: center;
      transform-origin: center;        
    }`,
    keyframe: `
    @-webkit-keyframes rotateIn {
      0% { -webkit-transform: rotate3d(0, 0, 1, 0); opacity: 0; }  
      100% { -webkit-transform: rotate3d(0, 0, 1, -720deg); opacity: 1; }
    }
   
    @keyframes rotateIn {
      0% { transform: rotate3d(0, 0, 1, 0); opacity: 0; }  
      100% { transform: rotate3d(0, 0, 1, -720deg); opacity: 1; }
    }`
  },
  {
    name: "rotateOut",
    clx: `
    .rotateOut {
      animation: rotateOut 3s;
      -webkit-animation: rotateOut 3s;
     
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;	
     
      -webkit-transform-origin: center;
      transform-origin: center;        
    }`,
    keyframe: `
    @-webkit-keyframes rotateOut {
      0% { -webkit-transform: rotate3d(0, 0, 1, -720deg); opacity: 1; }  
      100% { -webkit-transform: rotate3d(0, 0, 1, 0); opacity: 0; }
    }
   
    @keyframes rotateOut {
      0% { transform: rotate3d(0, 0, 1, -720deg); opacity: 1; }  
      100% { transform: rotate3d(0, 0, 1, 0); opacity: 0; }
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
      -webkit-animation: pulse infinite 2s linear;
      animation: pulse infinite 2s linear;
    }`,
    keyframe: `
    @-webkit-keyframes pulse {
      0% { -webkit-transform: scale(1); opacity: 0.7;}
      50% { -webkit-transform: scale(1.1); opacity: 1;}
      100% { -webkit-transform: scale(1); opacity: 0.7;}
    }
   
    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.7;}
      50% { transform: scale(1.1); opacity: 1; }
      100% { transform: scale(1); opacity: 0.7; }
    }`
  },
  {
    name: "pulseUpOut",
    clx: `
    .pulseUpOut {
      -webkit-animation-name: pulseUpOut;
      animation-name: pulseUpOut;
      -webkit-animation-duration: 2s;
      animation-duration: 2s;
    }`,
    keyframe: `
    @-webkit-keyframes pulseUpOut {
      0% { -webkit-transform: scale(1); }
      25% { -webkit-transform: translateY(-10px) scale3d(1.1, 0.7, 0); }
      50% { -webkit-transform: translateY(0) scale(0.2); }
      75% { -webkit-transform: translateY(-30px) scale3d(0.9, 0.5, 0); }
      100% { -webkit-transform: translateY(0) scale(1); }
    }
   
    @keyframes pulseUpOut {
      0% { transform: scale(1); }
      25% { transform: translateY(-10px) scale3d(1.1, 0.7, 0); }
      50% { transform: translateY(0) scale(0.2); }
      75% { transform: translateY(-30px) scale3d(0.9, 0.5, 0); }
      100% { transform: translateY(0) scale(1); }
    }`
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
    name: "slideRight",
    clx: `
    .slideRight{
      animation: slideRight 1s ease-in-out;
      -webkit-animation: slideRight 1s ease-in-out;	
    }`,
    keyframe: `
    @keyframes slideRight {
      0% { transform: translateX(-180%); opacity: 0; }
      45%{ transform: translateX(10%); }
      65%{ transform: translateX(-5%); }
      80%{ transform: translateX(5%); }
      95%{ transform: translateX(-2%); }			
      100% { transform: translateX(0%); opacity: 1; }	
    }
    
    @-webkit-keyframes slideRight {
      0% { -webkit-transform: translateX(-180%); opacity: 0; }
      45%{ -webkit-transform: translateX(10%); }
      65%{ -webkit-transform: translateX(-5%); }
      80%{ -webkit-transform: translateX(5%); }
      95%{ -webkit-transform: translateX(-2%); }			
      100% { -webkit-transform: translateX(0%); opacity: 1; }
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
  {
    name: "wiggle",
    clx: `
    .wiggle{
      animation-name: wiggle;
      -webkit-animation-name: wiggle;	
      animation-duration: 1s;	
      -webkit-animation-duration: 1s;
      animation-iteration-count: infinite;
      -webkit-animation-iteration-count: infinite;
    }`,
    keyframe: `
    @keyframes wiggle {
      from { transform: rotate(-5deg); }
      50% { transform: rotate(5deg); }
      to { transform: rotate(-5deg);	 }						
    }
    
    @-webkit-keyframes wiggle {
      from { -webkit-transform: rotate(-5deg);	 }
      50% { -webkit-transform: rotate(5deg); }
      to { -webkit-transform: rotate(-5deg);	 }				
    }`
  },
];


export default codeAnimation;
