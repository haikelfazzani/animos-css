const codeAnimation = [
  {
    name: "flipInX",
    clx: `.flipInX {
      -webkit-backface-visibility: visible !important;
      -webkit-animation-name: flipInX;
      backface-visibility: visible !important;
      animation-name: flipInX;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }`,
    keyframe: `@-webkit-keyframes flipInX {
      0% {
         -webkit-transform: perspective(400px) rotateX(90deg);
         opacity: 0;
      }
      40% {
         -webkit-transform: perspective(400px) rotateX(-10deg);
      }
      70% {
         -webkit-transform: perspective(400px) rotateX(10deg);
      }
      100% {
         -webkit-transform: perspective(400px) rotateX(0deg);
         opacity: 1;
      }
    }
    
    @keyframes flipInX {
      0% {
         transform: perspective(400px) rotateX(90deg); 
         opacity: 0;
      }
      40% {
         transform: perspective(400px) rotateX(-10deg);
      }
      70% {
         transform: perspective(400px) rotateX(10deg);
      }
      100% {
         transform: perspective(400px) rotateX(0deg);
         opacity: 1;
      }
    }    
    `
  },
  {
    name: "bounce",
    clx: `.bounce { 
      -webkit-animation-name: bounce; 
      animation-name: bounce; 
      -webkit-animation-duration: 1s;
     animation-duration: 1s;
     -webkit-animation-fill-mode: both;
     animation-fill-mode: both;
   }`,
    keyframe: `@-webkit-keyframes bounce { 
      0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);} 
      40% {-webkit-transform: translateY(-30px);} 
      60% {-webkit-transform: translateY(-15px);} 
   } 
   
   @keyframes bounce { 
      0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
      40% {transform: translateY(-30px);} 
      60% {transform: translateY(-15px);} 
   }`
  },
];


export default codeAnimation;
