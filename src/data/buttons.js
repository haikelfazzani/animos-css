const btnOptions = [
  { val: "button1", txt: "button1" },
  { val: "button2", txt: "button2" },
  { val: "button3", txt: "button3" },
  { val: "button4", txt: "button4" },
  { val: "button5", txt: "button5" },
  { val: "button6", txt: "button6" },
];

const standCode = `
  .but {
    display: inline-block;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    background-color: transparent;  
    padding: 7px 40px;
    font-size: 14px;
    line-height: 1.5;
    border-radius: .25rem;  

    text-transform: uppercase;  
    cursor: pointer;    
    overflow: hidden;  
    position: relative;
  }`;

const btnData = [
  {
    name: "button1",
    clx: `
    ${standCode}

    .button1 { color: #c21851 !important; border: 1px solid #c21851;  }
    
    .button1::before {    
      width: 102%;
      height: 0;  
      background-color: #e91e63;
      content: "";
      position: absolute;  
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      transition: all 0.5s ease;
    }
    
    .button1:hover { color: #ffffff !important; }
    
    .button1:hover::before { height: 100%; }
    `
  },
  {
    name: "button2",
    clx: `
    ${standCode}

    .button2 {  
      border: 1px solid #00bcd4;
      color: #ffffff;
    }
    
    .button2:hover { color: #00bcd4 }
    
    .button2::before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 180%;
      top: 0;
      border-radius: 0 0 50% 50%;
      background-color: #00bcd4;
      z-index: -1;
      transition: .5s;
    }
    
    .button2:hover::before { height: 0; }
    `
  },
  {
    name: "button3",
    clx: `
    ${standCode}

    .button3 {  
      border: 1px solid #ffc107;
      color: #ffc107;
    }
    
    .button3:hover { color: #ffffff }
    
    .button3::before {
      width: 0;
      height: 100%;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      background-color: #ffc107;
      z-index: -1;
      transition: .5s;
    }
    
    .button3:hover::before { width: 100%; }
    `
  },
  {
    name: "button4",
    clx: `
    ${standCode}

    .button4 {  
      border: 1px solid #2cca50;
      color: #2cca50;
      transition: .5s;
    }
    
    .button4:hover { color: #ffffff; background-color: #2cca50; }
    `
  },
  {
    name: "button5",
    clx: `
    ${standCode}

    .button5 { 
      color: #F44336 !important; 
      border: 1px solid #F44336;  
    }
    
    .button5::before {    
      width: 102%;
      height: 0;  
      background-color: #F44336;
      content: "";
      position: absolute;  
      top: 0;
      left: 0;
      z-index: -1;
      transition: all 0.5s ease;
    }
    
    .button5:hover { color: #ffffff !important; }
    
    .button5:hover::before { height: 100%; }
    `
  },
  {
    name: "button6",
    clx: `
    ${standCode}

    .button6 {  
      border: 1px solid #272727;
      color: #ffffff;
    }
    
    .button6:hover { color: #272727 }
    
    .button6::before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      top: 0;
      background-color: #272727;
      z-index: -1;
      transition: .5s;
    }
    
    .button6:hover::before { height: 0; }
    `
  },
];

export { btnData, btnOptions };
