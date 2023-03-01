import NowPlaying from "components/NowPlaying";
import { Navigation } from "components/Layout/Navigation";
import { ExternalLinkProps, StringProps } from "lib/types";
import ScrollToTop from "components/Layout/ScrollToTop";

import { Flex, StyledContainer } from "components/Layout/Container/styles";
import {
  FooterContainer,
  GridContainer,
  FlexLinks,
} from "components/Layout/Footer/styles";

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export const Footer = ({ darkTheme }: StringProps) => {
  return (
    <FooterContainer darkTheme={darkTheme}>
      <StyledContainer>
        <Flex justify="center" direction="column">
          <hr />
          {/* <NowPlaying /> */}
          <GridContainer>
            <FlexLinks>
              <Navigation href="/" text="Home" />
              {/* <Navigation href="/blog" text="Blog" /> */}
              {/* <Navigation href="/testimonials" text="Testimonials" /> */}
            </FlexLinks>
            <FlexLinks>
              <ExternalLink href="https://twitter.com/warambhe_tejas">
                Twitter
              </ExternalLink>
              <ExternalLink href="https://github.com/tejas-warambhe">
                GitHub
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/tejas-warambhe-0592841b4/">
                LinkedIn
              </ExternalLink>
            </FlexLinks>
          </GridContainer>
          <ScrollToTop darkTheme={darkTheme} />
        </Flex>
      </StyledContainer>
    </FooterContainer>
  );
};
