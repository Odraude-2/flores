export const baseFloralAnimation = `
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <style>
    .stem, .petal {
      stroke-width: 2;
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
      animation: draw 2.5s ease-out forwards;
    }

    @keyframes draw {
      to {
        stroke-dashoffset: 0;
      }
    }

    /* Animation delays */
    .flower-1 .stem { animation-delay: 0s; }
    .flower-1 .petal { animation-delay: 0.5s; }

    .flower-2 .stem { animation-delay: 1s; }
    .flower-2 .petal { animation-delay: 1.5s; }
    
    .flower-3 .petal { animation-delay: 2s; }
    .flower-3 .petal-accent { animation-delay: 2.2s; animation-duration: 1.5s; }

  </style>

  <!-- Flower 1 (left) -->
  <g class="flower-1">
    <path class="stem draw-animation" d="M100,250 C80,200 80,150 110,100" />
    <path class="petal draw-animation" d="M110,100 C90,80 110,60 110,100" />
    <path class="petal draw-animation" d="M110,100 C130,80 110,60 110,100" />
    <path class="petal draw-animation" d="M110,100 C90,120 110,140 110,100" />
    <path class="petal draw-animation" d="M110,100 C130,120 110,140 110,100" />
  </g>

  <!-- Flower 2 (right) -->
  <g class="flower-2">
    <path class="stem draw-animation" d="M200,250 C220,200 220,150 190,120" />
    <path class="petal draw-animation" d="M190,120 C170,100 190,80 190,120" />
    <path class="petal draw-animation" d="M190,120 C210,100 190,80 190,120" />
    <path class="petal draw-animation" d="M190,120 C170,140 190,160 190,120" />
    <path class="petal draw-animation" d="M190,120 C210,140 190,160 190,120" />
  </g>

  <!-- Flower 3 (center, different style) -->
  <g class="flower-3">
     <path class="petal-accent draw-animation" d="M150,180 C130,160 170,160 150,180" style="animation-delay: 2.1s" />
     <path class="petal-accent draw-animation" d="M150,180 C140,150 160,150 150,180" style="animation-delay: 2.2s" />
     <path class="petal draw-animation" d="M150,180 C160,200 140,200 150,180" style="animation-delay: 2.3s" />
     <path class="petal draw-animation" d="M150,180 C170,190 130,190 150,180" style="animation-delay: 2.4s" />
  </g>

</svg>
`;