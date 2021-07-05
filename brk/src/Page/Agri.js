




import React,{useState} from "react";
import defaultCardImage from "../images/shield-icon.svg";

import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import News from "./NewsFeeds"
import VideoSection from "./VideoSection"
import Dealer from "./Dealer";
import SupportIconImage from "../images/fast-icon.svg";
import ShieldIconImage from "../images/shield-icon.svg";
import CustomizeIconImage from "../images/customize-icon.svg";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtonss.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import tw from 'twin.macro' //eslint-disable-line
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../components/headers/light";
import { SectionHeading } from "components/misc/Headings.js";
import {Button} from "react-bootstrap"
import styled from "styled-components";
import ResponsiveVideoEmbed from "../helpers/ResponsiveVideoEmbed";
import Client_One from "../images/client_one@2x.png"
import Client_Two from "../images/client_two@2x.png"
import { ReactComponent as SvgDecoratorBlob3 } from "../images/svg-decorator-blob-3.svg";
import SimpleImageSlider from "react-simple-image-slider";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import One from "./src/Image3.png"
import Two from "./src/Image4.png"
import Three from "./src/Image5.png"
import Four from "./src/Image6.png"
import Five from "./src/Image7.png"
import Six from "./src/Image8.png"
import Seven from "./src/Image9.png"

import DOne from "./src/Dimg1.png"
import DTwo from "./src/Dimg2.png"
import DThree from "./src/Dimg3.png"
import DFour from "./src/Dimg4.png"
import DFive from "./src/Dimg5.png"




import AgriPDF from "./src/agriculturehome.pdf"
import DomesticPDF from "./src/domestic.pdf"



import TwoColumnWithFeaturesAndTestimonial from "components/hero/TwoColumnWithFeaturesAndTestimonial";

const StyledHeader = styled(Header)
`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
//TODO here we need to change Backgronud image
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1529045138962-5f59528258fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2031&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-10`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;



const ThreeColumnContainer = styled.div `
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-green-800 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-green-800 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-green-700`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const Agri = () => {

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Agriculture",
      description: "BRK systems sort out the problem due to hard water or unstructured water in a home. it also unclogged water jets which help to clear out the clog present inside the pipes of your homes."
    },
    { imageSrc: SupportIconImage, title: "Domestic",
    description: "Structure water device benefits in agriculture such as soil hold moisture longer, increase root growth, increase seed germination."
  
  },
    { imageSrc: CustomizeIconImage, title: "Industry" ,
    description: "Less Fertilizer Cost-30% De-Scaling of Piping Unclogged Water Jets Less Energy Required to Pump and Irrigate"
  },
  
  ];


  const [Agriculture, setAgriculture] = useState(false);
  const [Domestic, setDomestic] = useState(false);
  const [Industry, setIndustry] = useState(false);

    const setProduct = (product) => {
          if(product === 'Agriculture'){
            setAgriculture(true);
            setDomestic(false)
            setIndustry(false)
          }
          
          else if(product === 'Domestic'){
            setDomestic(true)
            setIndustry(false)
            setAgriculture(false);

          }
          else if(product === 'Industry'){
            setIndustry(true)
            setAgriculture(false);
            setDomestic(false)

          }
    } 

    const images = [
      { url: One },
      { url: Two },
      { url: Three },
      { url: Four },
      { url:  Five},
      { url: Six },
      { url: Seven },
    ];

    
    const Dimages = [
      { url: DOne },
      { url: DTwo },
      { url: DThree },
      { url: DFour },
      { url:  DFive},
    ];


    const showProduct = (products) => {
        if(Agriculture){
          return(
            
            <div style={{alignContent:'center'}}>
              <Heading><span tw="text-green-700">Agriculture</span></Heading>
              <SimpleImageSlider
              style={{ margin: '0 auto', marginTop: '50px' }}
              startIndex={0}
              navSize={50}
              showBullets={true}
              showNavs={true}
              navMargin={30}
              width={1200}
              
              height={800}
              slideDuration={0.5}
        images={images}
      />

            <div style={{
              margin: '0 auto',
              alignContent:'center',
              alignItems:'center'
            }}>
              <a style={{
                alignSelf:'center',
                marginTop: '50px'
              }}
              href={AgriPDF}
              download
              >
              Download Brochure

                </a>
            </div>

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
          null,
          profileImageSrc:
            "",
          quote:
            "BRK Systems electronic descaler is effective in the chiller unit, cleaning work was performed 2-times in 15 months. Temperature maintains less than 2.5 degrees Celcius in the condenser.",
          customerName: "Solara Active Pharma Science Ltd.",
          customerTitle: "Pharma"
        },
        {
          imageSrc:
          null,
          profileImageSrc:
            "",
            quote:
            "Hard precipitation of salt on tank drastically reduced like small salt flasks. Maintenance and cleaning process reduced from one day to 3 hours. Water wastage gets reduced simultaneously, and the water PH is maintained.",
          customerName: "Pioneer Gloves Factory",
          customerTitle: "Farmer"
        },
        {
          imageSrc:
          null,
          profileImageSrc:
            "",
            quote:
            "After installation of BRK system structure water unit. Coconut yield drastically increased to 5 times than before. Irrigation time gets reduced into 20 to 40%. Attains uniformity in Coconut and weight of coconut was increased.",
          customerName: "UKP Radha Krishnan",
          customerTitle: "Farmer"
        }
      ]}
      textOnLeft={true}
    />
            </div>
           
          )
        }
        else if(Domestic){
          return(
            
            <div style={{alignContent:'center'}}>
              <Heading><span tw="text-green-700">Domestic</span></Heading>
              
       
              <Carousel>
                <div>
                    <img src={DOne} />
                </div>
                <div>
                    <img src={DTwo} />
                </div>
                <div>
                    <img src={DThree} />
                </div>
            </Carousel>
             

<SimpleImageSlider
style={{ margin: '0 auto', marginTop: '50px' }}
startIndex={0}
navSize={50}
showBullets={true}
showNavs={true}
navMargin={30}
width={1200}

height={800}
slideDuration={0.5}
images={Dimages}
/>

              

            <div style={{
              margin: '0 auto',
              alignContent:'center',
              alignItems:'center'
            }}>
              <a style={{
                alignSelf:'center',
                marginTop: '50px'
              }}
              href={DomesticPDF}
              download
              >
              Download Brochure

                </a>
            </div>

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
          null,
          profileImageSrc:
            "",
          quote:
            "BRK Systems electronic descaler is effective in the chiller unit, cleaning work was performed 2-times in 15 months. Temperature maintains less than 2.5 degrees Celcius in the condenser.",
          customerName: "Solara Active Pharma Science Ltd.",
          customerTitle: "Pharma"
        },
        {
          imageSrc:
          null,
          profileImageSrc:
            "",
            quote:
            "Hard precipitation of salt on tank drastically reduced like small salt flasks. Maintenance and cleaning process reduced from one day to 3 hours. Water wastage gets reduced simultaneously, and the water PH is maintained.",
          customerName: "Pioneer Gloves Factory",
          customerTitle: "Farmer"
        },
        {
          imageSrc:
          null,
          profileImageSrc:
            "",
            quote:
            "After installation of BRK system structure water unit. Coconut yield drastically increased to 5 times than before. Irrigation time gets reduced into 20 to 40%. Attains uniformity in Coconut and weight of coconut was increased.",
          customerName: "UKP Radha Krishnan",
          customerTitle: "Farmer"
        }
      ]}
      textOnLeft={true}
    />
            </div>
           
          )
        }
        else if(Industry){
          return(
            <h2>
              Industry
            </h2>
          )
        }
    }


    return(
        <AnimationRevealPage>
      <ThreeColumnContainer>
      <Heading>Why choose <span tw="text-green-700">our product?</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
             
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
              <Button onClick={() => setProduct(card.title)} variant="outline-success">See Now</Button>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
          <div>
{showProduct()}
            </div>
        <div style={{marginTop:45}}>
        <Footer/>

            </div>
 </AnimationRevealPage>
    )
}

export default Agri;