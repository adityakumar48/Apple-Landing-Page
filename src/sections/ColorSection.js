import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
  position: relative;
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: var(--fontxxl);
  text-transform: uppercase;

  filter: brightness(0.85);
`;

const ColorSection = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const textRef = useRef(null);

  const { materials } = useGLTF("/scene.gltf");

  useLayoutEffect(() => {
    let ELem = sectionRef.current;
    let rightElem = rightRef.current;
    let leftElem = leftRef.current;
    let textElem = textRef.current;

    let updateColor = (color, text, rgbColor) => {
      materials.Body.color.set(color);

      textElem.innerText = text;
      textElem.style.color = color;

      rightElem.style.backgroundColor = `rgba(${rgbColor}, 0.4)`;
      leftElem.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
    };

    // pin the Section
    gsap.to(ELem, {
      scrollTrigger: {
        trigger: ELem,
        start: "top top",
        end: `+=${ELem.offsetWidth + 1000} `,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: ELem,
          start: "top top",
          end: `+=${ELem.offsetWidth + 1000} `,
          scrub: true,
        },
      })
      .to(ELem, {
        onStart: updateColor,
        onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
      })
      .to(ELem, {
        onStart: updateColor,
        onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      })
      .to(ELem, {
        onStart: updateColor,
        onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      })
      .to(ELem, {
        onStart: updateColor,
        onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
      })
      .to(ELem, {
        onStart: updateColor,
        onStartParams: ["#A50011", "Red", "165, 0, 17"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
      })
      .to(ELem, {
        onStart: updateColor,
        onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
      });

    return () => {};
  }, []);

  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef} />
      <Center ref={textRef} />
      <Right ref={rightRef} />
    </Section>
  );
};

export default ColorSection;
