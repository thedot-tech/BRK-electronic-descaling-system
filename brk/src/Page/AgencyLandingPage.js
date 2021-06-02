import React from "react";
import tw from 'twin.macro' //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";



import Hero from "components/hero/BackgroundAsImage.js";
import News from "./NewsFeeds"
import VideoSection from "./VideoSection"
import Dealer from "./Dealer";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";


import Client_One from "../images/client_one@2x.png"
import Client_Two from "../images/client_two@2x.png"


export default () => (
  <AnimationRevealPage>
    <Hero />
    <News/>
    <VideoSection/>
    <MainFeature />  
    <Features />
    <MainFeature2 />
    <Portfolio />
    <Testimonial
      subheading="Testimonials"
      heading={
        <>
          Our Clients <span tw="text-blue-500">Love Us.</span>
        </>
      }
      description="Here are what some of our amazing customers are saying about our product. And their are their thoughts about our product."
      testimonials={[
        {
          imageSrc:
          Client_One,
          profileImageSrc:
            "",
          quote:
            "Great Product for Water treatment",
          customerName: "Kumar",
          customerTitle: "Farmer"
        },
        {
          imageSrc:
          Client_Two,
          profileImageSrc:
            "",
            quote:
            "Great Product for Water treatment",
          customerName: "Kumar",
          customerTitle: "Farmer"
        }
      ]}
      textOnLeft={true}
    />
    <Dealer/>
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Do you have <span tw="text-blue-500">Questions ?</span>
        </>
      }
    />
    <Footer />
  </AnimationRevealPage>
);
