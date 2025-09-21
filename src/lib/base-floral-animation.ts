export const baseFloralAnimation = `
<svg width="300" height="300" viewBox="-50 -50 400 400" xmlns="http://www.w3.org/2000/svg">
  <style>
    .stem, .leaf, .petal {
      stroke-width: 3;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .stem {
      stroke: #90be9d;
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
      animation: draw 2s cubic-bezier(0.6, 0, 0.4, 1) forwards;
    }
    .leaf {
      stroke: #90be9d;
      fill: #90be9d;
      fill-opacity: 0;
      animation: unfold 1.5s cubic-bezier(0.6, 0, 0.4, 1) 1s forwards;
    }
    .petal {
      stroke: #FCE883;
      fill: #FCE883;
      fill-opacity: 0;
      transform-origin: center;
      animation: bloom 1.5s cubic-bezier(0.6, 0, 0.4, 1) 1.5s forwards;
    }
    .petal-accent {
      stroke: #FFB9B9;
      fill: #FFB9B9;
      fill-opacity: 0;
      transform-origin: center;
      animation: bloom 1.8s cubic-bezier(0.6, 0, 0.4, 1) 1.7s forwards;
    }

    @keyframes draw {
      to { stroke-dashoffset: 0; }
    }
    @keyframes unfold {
      0% { transform: scaleY(0.1); fill-opacity: 0; }
      100% { transform: scaleY(1); fill-opacity: 0.4; }
    }
    @keyframes bloom {
      0% { transform: scale(0); fill-opacity: 0; }
      100% { transform: scale(1); fill-opacity: 0.6; }
    }
  </style>

  <g transform="translate(150, 0)">
    <!-- Stem -->
    <path class="stem" d="M0,300 C 0,250 20,150 0,100" />

    <!-- Leaves -->
    <path class="leaf" transform="translate(-5, 180)" d="M0,0 C20,-20 30,-50 -10,-60 Q-20 -30 0,0" />
    <path class="leaf" transform="translate(5, 230) scale(-1, 1)" d="M0,0 C20,-20 30,-50 -10,-60 Q-20 -30 0,0" />

    <!-- Main Flower -->
    <g transform="translate(0, 100)">
      <!-- Central accent petals -->
      <circle class="petal-accent" cx="0" cy="0" r="15" style="animation-delay: 2s;"/>
      
      <!-- Yellow Petals -->
      <g class="petal" style="animation-delay: 1.5s;">
        <path d="M0,-50 Q35,-40 0,0" />
        <path d="M0,-50 Q-35,-40 0,0" />
      </g>
       <g class="petal" style="animation-delay: 1.6s;">
        <path d="M50,0 Q40,35 0,0" />
        <path d="M50,0 Q40,-35 0,0" transform="rotate(180)"/>
      </g>
      <g class="petal" style="animation-delay: 1.7s;">
        <path transform="rotate(45)" d="M0,-45 Q30,-35 0,0" />
        <path transform="rotate(45)" d="M0,-45 Q-30,-35 0,0" />
      </g>
       <g class="petal" style="animation-delay: 1.8s;">
        <path transform="rotate(-45)" d="M0,-45 Q30,-35 0,0" />
        <path transform="rotate(-45)" d="M0,-45 Q-30,-35 0,0" />
      </g>
    </g>
  </g>
</svg>
`