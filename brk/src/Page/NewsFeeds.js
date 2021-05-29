import React from "react";
import tw from 'twin.macro' //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line

import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import StatsIllustrationSrc from "images/stats-illustration.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
const Container = tw.div `relative`;

const ThreeColumnContainer = styled.div `
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;


const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`
  ]);
  const TextContent = tw.div`lg:py-8 text-center md:text-left`;
  
  const Subheading = tw(SubheadingBase)`text-center md:text-left`;
  const Heading = tw(
    SectionHeading
  )`mt-5 text-green-800 text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
  const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
  
  const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
  const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
  const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
  const Key = tw.div`font-medium text-primary-700`;
  
  const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;
  
  const DecoratorBlob = styled(SvgDotPattern)(props => [
    tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
  ]);
  
export default function NewsFeeds() {
    return (
        <Container>
            <br/>
              <Heading tw="text-center mt-5">News and <span tw=" text-green-900">feeds.</span></Heading>
       
        
        </Container>
    )
}
