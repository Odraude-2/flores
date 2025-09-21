export const baseFloralAnimation = `
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <style>
    .stem, .petal {
      stroke-width: 2.5;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .stem {
      stroke: #90be9d; /* A pastel green */
    }
    .petal {
      stroke: #FCE883; /* Soft yellow from palette */
    }
    .petal-accent {
      stroke: #FFB9B9; /* Pale rose for variety */
      fill: #FFB9B9;
      fill-opacity: 0.3;
    }

    .draw-animation {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: draw 2.8s cubic-bezier(0.6, 0, 0.4, 1) forwards;
    }

    @keyframes draw {
      to {
        stroke-dashoffset: 0;
      }
    }

    /* Animation delays */
    .flower-1 .stem { animation-delay: 0s; }
    .flower-1 .petal { animation-delay: 0.4s; }

    .flower-2 .stem { animation-delay: 0.8s; }
    .flower-2 .petal { animation-delay: 1.2s; }
    
    .flower-3 .petal { animation-delay: 1.6s; }
    .flower-3 .petal-accent { animation-delay: 1.8s; animation-duration: 2s; }

  </style>

  <!-- Flower 1 (left) -->
  <g class="flower-1">
    <path class="stem draw-animation" d="M125,250 C105,200 105,150 135,100" />
    <path class="petal draw-animation" d="M135,100 C115,80 135,60 135,100" />
    <path class="petal draw-animation" d="M135,100 C155,80 135,60 135,100" />
    <path class="petal draw-animation" d="M135,100 C115,120 135,140 135,100" />
    <path class="petal draw-animation" d="M135,100 C155,120 135,140 135,100" />
  </g>

  <!-- Flower 2 (right) -->
  <g class="flower-2">
    <path class="stem draw-animation" d="M175,250 C195,200 195,150 165,120" />
    <path class="petal draw-animation" d="M165,120 C145,100 165,80 165,120" />
    <path class="petal draw-animation" d="M165,120 C185,100 165,80 165,120" />
    <path class="petal draw-animation" d="M165,120 C145,140 165,160 165,120" />
    <path class="petal draw-animation" d="M165,120 C185,140 165,160 165,120" />
  </g>

  <!-- Flower 3 (center, different style) -->
  <g class="flower-3" transform="translate(0, 40)">
     <path class="petal-accent draw-animation" d="M150,180 C130,160 170,160 150,180" style="animation-delay: 1.7s" />
     <path class="petal-accent draw-animation" d="M150,180 C140,150 160,150 150,180" style="animation-delay: 1.8s" />
     <path class="petal draw-animation" d="M150,180 C160,200 140,200 150,180" style="animation-delay: 1.9s" />
     <path class="petal draw-animation" d="M150,180 C170,190 130,190 150,180" style="animation-delay: 2.0s" />
  </g>

</svg>
`;