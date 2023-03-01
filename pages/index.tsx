import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Timeline } from "components/Timeline";
import { Projects } from "components/Projects";
import { Posts } from "components/Posts";
import Container from "components/Layout/Container";
import { StringProps } from "lib/types";
import { devices } from "lib/displayDevice";

import { Flex } from "components/Layout/Container/styles";

import ProfilePicture from "public/assets/png/Tejas.jpg";

export default function Home() {
  return (
    <Container>
      <HeroFlex align="flex-start">
        <ContentWrapper>
          <h1>Tejas Warambhe</h1>
          <h2>Software Engineer</h2>
          <p>
          I am a software developer with a passion for web development and blockchain. 
          <br /> With 3 years of experience in the industry, I have honed my skills in creating innovative solutions for complex problems.
<br />
Throughout my career, I have worked on a variety of projects ranging from e-commerce websites to decentralized applications on the blockchain. I am constantly pushing myself to learn and stay up-to-date with the latest technologies and trends in the industry.
      <br />      
          </p>
        </ContentWrapper>
        <RoundImage
          src={ProfilePicture}
          alt="Picture of Lasha"
          width="150px"
          height="150px"
        />
      </HeroFlex>
      <Projects />
      <Posts title="Experiences" />
      {/* <Timeline /> */}
    </Container>
  );
}

export const ContentWrapper = styled.div<StringProps>`
  padding-right: 2rem;

  h1,
  h2 {
    margin: 0;
  }

  h2 {
    margin: 1rem 0;
    font-size: 1.25rem;
  }

  p {
    max-width: 65ch;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
`;

export const RoundImage = styled(Image)`
  border-radius: 50%;
`;

const HeroFlex = styled(Flex)`
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;
