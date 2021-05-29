import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as PowerIcon } from "feather-icons/dist/icons/power.svg";
import { ReactComponent as HeartIcon } from "feather-icons/dist/icons/heart.svg";

import Process from "../../images/tech@2x.png"


import TeamIllustrationSrc from "images/team-illustration-2.svg";

const Container = tw.div `relative`;
const TwoColumn = tw.div `flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div `w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)
`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
    tw `md:w-7/12 mt-16 md:mt-0`,
    props.textOnLeft ? tw `md:mr-12 lg:mr-16 md:order-first` : tw `md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw `rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div `lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)
`text-center md:text-left`;
const Heading = tw(
    SectionHeading
)
`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p `mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-800`;

const Features = tw.div `mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div `mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div `
  ${tw`mx-auto inline-block border border-primary-500 text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5 text-primary-500`}
  }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`font-bold text-lg text-green-700`;
const FeatureDescription = tw.div`mt-1 text-sm`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

export default ({
  subheading = "The technology",
  heading = (
    <>
      We have the most <span tw="text-green-800">stunning</span> technology.
    </>
  ),
  description = `
  BRK systems structure water device induces ceramic magnetic field inside the pipe
line to the water molecules during the water flow thro piping system. This field forces the
dissolved calcium and magnesium bicarbonate ions to create the crystallizing nuclei of
calcium and magnesium carbonate in the bulk of the water. These micro crystals
continuously grow (the snowball effect) and they flow with the water in the form of
suspended particles. Their size and shape is muchdifferent to those formed in
untreatedwater, they don\`t stick at the piping walls, heating elements of boilers or washing
machines and they remain in suspension until discharged to drain.`,
description2 = `
  
These changes in the molecular structure of the water by converting High sized, Low
Energy Molecules to Low sized, High Energy Molecules. There by reducing the Surface
tension in the water to a greater extent and increase the Dissolved Oxygen Levels to 6-8%.
As the by-products of the precipitation of calcium carbonate (CaCO3) from the
solution of calcium bicarbonate (Ca (HCO3)2) in the water, the carbon dioxide is released
into the water. Carbon dioxide dissolved in unsaturated water (with much lesser amount of
dissolved calcium ions) allows dissolving and softening old scale layers in the pipes, heating
elements, heat exchangers etc.`,
description3 = `

Mechanical force of water flow accelerates this descaling process. The dissolving of
old scale deposits requires the water flow through the pipes. If there is no flow, unsaturated
water with carbon dioxide cannot dissolve existing scale. From this all results that after
installation of DESCALER device in older water systems with scale deposits, the water from
the tap may temporarily contain even higher amount of calcium than untreated water. The 
time of descaling process depends on water usage`,
  primaryButtonText = "Working",
  primaryButtonUrl = "https://timerse.com",
  features = null,
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */
  const defaultFeatures = [
    {
      Icon: BriefcaseIcon,
      title: "No use of Salts or Chemicals",
      description: "We have the best professional marketing people across the globe just to work with you."
    },
    {
      Icon: PowerIcon,
      title: "No Power",
      description: "We promise to offer you the best rate we can - at par with the industry standard."
    }
    ,
    {
      Icon: MoneyIcon,
      title: "Free from Maintenance",
      description: "We promise to offer you the best rate we can - at par with the industry standard."
    }
    ,
    {
      Icon: HeartIcon,
      title: "Life span of 25 + Years (A Fit and Forget Device)",
      description: "We promise to offer you the best rate we can - at par with the industry standard."
    },
    {
      Icon: MoneyIcon,
      title: " This is a Nano Technology",
      description: "We promise to offer you the best rate we can - at par with the industry standard."
    }
  ];

  if (!features) features = defaultFeatures;

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={Process} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
           
            <Description>{description2}</Description>
            <Description>{description3}</Description>


            <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureIconContainer>{<feature.Icon />}</FeatureIconContainer>
                  <FeatureText>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureText>
                </Feature>
              ))}
            </Features>
            <PrimaryButton as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};