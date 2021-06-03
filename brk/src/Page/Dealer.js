import React,{useState} from 'react'
import tw from "twin.macro";

import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import Client_One from "../images/client_one@2x.png"
import Client_Two from "../images/client_two@2x.png"
import {Form,Card,Button} from 'react-bootstrap'
import firebase from 'firebase';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const ThreeColumnContainer = styled.div `
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-primary-700`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);
export default function Dealer() {

    const [selectLoc, setselectLoc] = useState(null);

    const [dealer, setdealer] = useState([]);


    const seeDealersData = () => {
        console.log("Dealers -- >",dealer);
        console.log("Dealers -- >",dealer.length);



            

        // for(var t = 0;t<dealer.length;t++){
        //     return(
               
        //     )
        // }
    }
    const onSelectLocation = (event) => {
        setselectLoc(event.target.value)
    }

    const onSearch = (e) => {

        console.log('Top Temp ',dealer);

        e.preventDefault();
        // get all dealers
        let Temp =[];
        if(selectLoc){
            var ref = firebase.database().ref(`/dealer/${selectLoc}`).on('value',snapshot => {
                console.log(snapshot.val())
                if(snapshot.val() === null)
                setdealer([])
                else
                setdealer(Object.values(snapshot.val()))

            })
        
        }

   
    }

    const showMapNow = (latitude,longitude) => {
        console.log( latitude,longitude);
        var url = "https://maps.google.com/?q=" + latitude + "," + longitude;
        console.log(url);
            window.open(url);
    }
    const showMap  = (latitude,longitude) => {
        return(
    <Button variant="warning" onClick={() => showMapNow(latitude,longitude)}>Open map</Button>

        )
   
    }
    return (
        <div>
       <Container>
      <ThreeColumnContainer>

      <Heading>Search <span tw="text-green-700">our Dealers,</span></Heading>
  
      <Column style={{marginTop:50}}>
      <Form.Group>
  <Form.Control as="select" size="lg" onChange={onSelectLocation}>
<option>Theni</option>
<option>Coimbatore</option>
  <option>Ariyalur</option>
<option>Chengalpattu</option>
<option>Chennai</option>
<option>Cuddalore</option>
<option>Dharmapuri</option>
<option>Dindigul</option>
<option>Erode</option>
<option>Kallakurichi</option>
<option>Kanchipuram</option>
<option>Kanyakumari</option>
<option>Karur</option>
<option>Krishnagiri</option>
<option>Madurai</option>
<option>Nagapattinam</option>
<option>Namakkal</option>
<option>Nilgiris</option>
<option>Perambalur</option>
<option>Pudukkottai</option>
<option>Ramanathapuram</option>
<option>Ranipet</option>
<option>Salem</option>
<option>Sivaganga</option>
<option>Tenkasi</option>
<option>Thanjavur</option>
<option>Thoothukudi (Tuticorin)</option>
<option>Tiruchirappalli</option>
<option>Tirunelveli</option>
<option>Tirupathur</option>
<option>Tiruppur</option>
<option>Tiruvallur</option>
<option>Tiruvannamalai</option>
<option>Tiruvarur</option>
<option>Vellore</option>
<option>Viluppuram</option>
<option>Virudhunagar</option>
  </Form.Control>
  
</Form.Group>
      </Column>
      <Column>
      <div>
                    {dealer ? (dealer.map((D) => {
                        return(
<div>
<Card style={{border:'none',backgroundColor:'#FF6263'}}>
  <Card.Body>
    <Card.Title className="text-white">Name {D.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-white">Phone  {D.phone}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-white">Email  {D.email}</Card.Subtitle>

    <Card.Text className="text-white">
      Address {D.address}

    </Card.Text>

    {showMap(D.latitude,D.longitude)}
  </Card.Body>
</Card>
<br/>
</div>
                        )
     

                    })
):(
    <div>
        <p>
            There is no Dealers here
        </p>
        </div>
)
                    }
           
            </div>
      </Column>
      <CardAction onClick={onSearch}>Search</CardAction>
      </ThreeColumnContainer>

       </Container>
        </div>
    )
}
