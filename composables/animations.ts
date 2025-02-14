import { gsap } from 'gsap';

export const useTextTurnAnimations = (
  notreElement: Ref<HTMLElement | null>
) => {
  const animateTextTurnIn = () => {
    if (notreElement.value) {
      gsap.to(notreElement.value, {
        rotateX: 360,
        duration: 1,
        ease: 'power2.out',
      });
    }
  };

  const animateTextTurnOut = () => {
    if (notreElement.value) {
      gsap.to(notreElement.value, {
        rotateX: 0,
        duration: 1,
        ease: 'power2.out',
      });
    }
  };

  return { animateTextTurnIn, animateTextTurnOut };
};

export const useButtonCircleAnimations = (
  buttonElement: Ref<HTMLElement | null>,
  circleElement: Ref<SVGCircleElement | null>
) => {
  const animateButtonCircleIn = () => {
    if (buttonElement.value && circleElement.value) {
      gsap.to(buttonElement.value, {
        color: 'white',
        duration: 0.5,
      });

      gsap.to(circleElement.value, {
        attr: { r: '125%' },
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };

  const animateButtonCircleOut = () => {
    if (buttonElement.value && circleElement.value) {
      gsap.to(buttonElement.value, {
        backgroundColor: 'transparent',
        color: '#DF463E',
      });
      gsap.to(circleElement.value, {
        attr: { r: '0' },
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };

  const moveCircle = (event: MouseEvent) => {
    if (circleElement.value) {
      const rect = buttonElement.value?.getBoundingClientRect();
      if (rect) {
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        circleElement.value.setAttribute('cx', x.toString());
        circleElement.value.setAttribute('cy', y.toString());
      }
    }
  };

  return { animateButtonCircleIn, animateButtonCircleOut, moveCircle };
};

export const useTextSlideAnimations = (
  textButtonElement: Ref<HTMLElement | null>
) => {
  const animateTextSlideIn = () => {
    if (textButtonElement.value) {
      const timeline = gsap.timeline({ paused: true });

      timeline.to(textButtonElement.value, {
        duration: 0.2,
        yPercent: -150,
        ease: 'power2.in',
      });
      timeline.set(textButtonElement.value, { yPercent: 150 });
      timeline.to(textButtonElement.value, {
        duration: 0.2,
        yPercent: 0,
        ease: 'power2.out',
      });

      timeline.play();
    }
  };

  const animateTextSlideOut = () => {
    if (textButtonElement.value) {
      const timeline = gsap.timeline({ paused: true });

      timeline.to(textButtonElement.value, {
        duration: 0.2,
        yPercent: 150,
        ease: 'power2.in',
      });
      timeline.set(textButtonElement.value, { yPercent: -150 });
      timeline.to(textButtonElement.value, {
        duration: 0.2,
        yPercent: 0,
        ease: 'power2.out',
      });

      timeline.play();
    }
  };

  return { animateTextSlideIn, animateTextSlideOut };
};
