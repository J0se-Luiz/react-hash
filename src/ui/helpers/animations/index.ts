import { keyframes } from "styled-components";

export const animationStartGame = keyframes`
  0% {  transform: scale(1.2) rotate(-7deg);}
  40% {  transform: rotate(7deg) ;}
  100% {  transform: rotate(-7deg);} 
`;

export const animationDraw = keyframes`
  40% {  transform: translateX(-35px) scale(1.1);}
  100% {  transform: scaleX(-1) rotate(0);} 
`;

export const animationWinnerCoin = keyframes`
  0% { transform: scaleX(-1) rotate(0); }
  40% {  transform: translateX(0) scale(0.9);  }
  100% {  transform: scaleX(-1); } 
`;

export const animationWinnerTrophy = keyframes`
  0% { transform: scale(1.1);}
  40% {  transform:  scale(0.8);}
  100% { transform: scale(1.1);}
`;

export const animationTurnPlayer = keyframes`
  0% {  transform: scale(0.9);}
  40% {  transform: scale(1.2);}
  100% {  transform:  scale(0.8);} 
`;

export const animationRound = keyframes`
  0% {  transform: scaleX(-1) scale(1.1);}
  40% {  transform: scale(0.7) ;}
  100% {  transform:  scale(1.4);} 
`;

export const animationRotateIconGit = keyframes`
 0% { transform: rotate(40deg) }
 10% {  transform: rotate(347deg) }
 20% {   transform: rotate(17deg) }
 30% {   transform: rotate(-60deg)) }
 40% {  transform: rotate(40deg)  }
 60% {   transform: rotate(-70deg) }
 80% {   transform: rotate(50deg) }
 100% {  transform: rotate(-60deg) } 
`;
