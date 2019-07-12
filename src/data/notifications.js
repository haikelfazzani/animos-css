const codeNotifications = [
  {
    name: "snackbar",
    clx: `
    .snackbar {
      visibility: hidden; 
      min-width: 250px;
      margin: auto;
      background-color: #292929c2;
      color: #fff; 
      text-align: center;
      font-size: 16px;
      border-radius: 5px; 
      padding: 16px;
      position: fixed; 
      z-index: 999; 
      /*left: 50%; */
      bottom: 30px; 
    }
    
    .snackbar.show {
      visibility: visible; 
      -webkit-animation: ExpandFadeIn 0.5s, ExpandFadeOut 0.5s 2.5s;
      animation: ExpandFadeIn 0.5s, ExpandFadeOut 0.5s 2.5s;
    }
    
    /* keyframe: */
    @-webkit-keyframes ExpandFadeIn {
      from { min-width: 0; bottom: 0; opacity: 0; } 
      to { min-width: 250px; bottom: 30px; opacity: 1; }
    }
    
    @keyframes ExpandFadeIn {
      from { min-width: 0; bottom: 0; opacity: 0; }
      to { min-width: 250px; bottom: 30px; opacity: 1; }
    }
    
    @-webkit-keyframes ExpandFadeOut {
      from { min-width: 250px; bottom: 30px; opacity: 1; } 
      to { min-width: 0; bottom: 0; opacity: 0; }
    }
    
    @keyframes ExpandFadeOut {
      from { min-width: 250px; bottom: 30px; opacity: 1; }
      to { min-width: 0; bottom: 0; opacity: 0; }
    }`
  },  
  {
    name: "toast",
    clx: `
    .toast {
      visibility: hidden; 
      min-width: 200px;
      background-color: #292929c2;
      color: #fff;
      padding: 15px;
      text-align: left;
      position: fixed;
      top: 30px;
      right: 30px;
    }
    
    .toast p { font-size: 14px; }
    
    .toast.show {
      visibility: visible; 
      -webkit-animation: FadeIn 0.5s, FadeOut 0.5s 2.5s;
      animation: FadeIn 0.5s, FadeOut 0.5s 2.5s;
    }
    
    /* keyframe: */
    @-webkit-keyframes FadeIn {
      from { top: 0; opacity: 0; } 
      to { top: 30px; opacity: 1; }
    }
    
    @keyframes FadeIn {
      from {top: 0; opacity: 0; }
      to { top: 30px; opacity: 1; }
    }
    
    @-webkit-keyframes FadeOut {
      from { top: 30px; opacity: 1; } 
      to { top: 0; opacity: 0; }
    }
    
    @keyframes FadeOut {
      from { top: 30px; opacity: 1; }
      to { top: 0; opacity: 0; }
    }`
  }
];

export default codeNotifications;
