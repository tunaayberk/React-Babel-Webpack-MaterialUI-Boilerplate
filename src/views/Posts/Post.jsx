import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function UserProfile(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                Lorem Ipsum Title is Here
              </h4>
              <p className={classes.cardCategoryWhite}>
                This is short description of the page
              </p>
            </CardHeader>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                congue purus eu vestibulum facilisis. Vestibulum id elementum
                tellus, nec tristique urna. Quisque laoreet pulvinar turpis,
                vitae accumsan risus convallis eu. Sed fringilla, odio vitae
                aliquet porttitor, neque risus pulvinar lectus, fermentum
                sagittis eros ex ac libero. Aliquam sed accumsan tortor. Sed vel
                ultrices libero. Donec ultricies sodales justo, non tincidunt
                metus placerat sed. In cursus in sapien sed porttitor. Vivamus
                condimentum maximus leo, quis eleifend neque volutpat eu.
                Pellentesque porttitor ullamcorper nisi, eu convallis leo
                blandit sit amet. Suspendisse justo velit, porta vel efficitur
                non, ultrices sit amet sapien. Nulla id tellus eget est
                consequat rhoncus at et dui. Donec non eros a tortor cursus
                gravida. Nullam malesuada nisi feugiat neque vehicula vehicula.
                Donec et nunc sagittis, vulputate nibh quis, vehicula nunc.
                Vivamus nisi libero, volutpat vitae risus vel, molestie
                pellentesque mi. Nunc blandit arcu in elit placerat, non
                tincidunt sapien iaculis. Duis semper lectus vitae tincidunt
                consectetur. Fusce sit amet pellentesque sem. Vivamus sagittis
                vestibulum odio sit amet viverra. Mauris porttitor nec lacus sit
                amet tempus. Donec tincidunt enim tellus, ut pretium mauris
                faucibus sit amet. Nam dapibus facilisis tellus id ultrices.
                Mauris fringilla tortor eu augue dignissim placerat. Curabitur
                pulvinar mi vitae nisi ultrices mattis. Praesent in risus non
                tortor dignissim fermentum. Cras quis leo hendrerit, pharetra
                metus sed, accumsan massa. Mauris blandit congue semper. Nulla
                facilisi. Sed maximus felis ac tempus sagittis. Etiam non
                elementum lectus. Nulla sagittis bibendum libero a tempus. Nulla
                eu rhoncus justo. Nulla blandit consectetur enim, vitae cursus
                nisl blandit vel. Nunc finibus magna quis viverra pellentesque.
                Cras sagittis tortor a massa pretium convallis. Aliquam eleifend
                eros ultrices nibh aliquet, a mattis lacus vulputate. Praesent
                maximus sit amet augue vitae rutrum. Nunc tincidunt neque vitae
                lacus bibendum tristique. Morbi sed ligula interdum, maximus dui
                quis, imperdiet velit. Praesent blandit malesuada varius. Duis
                in vehicula nunc, eget ultrices velit. Sed quam neque, dignissim
                at erat et, hendrerit volutpat neque. Nulla porta metus sed quam
                dapibus, vitae ullamcorper risus eleifend. Duis elementum elit
                enim, in fermentum lacus cursus at. Aenean vitae posuere elit,
                vitae imperdiet neque. Fusce pretium gravida lectus at lacinia.
                Cras fermentum, augue id tristique vehicula, velit metus dictum
                magna, in accumsan mauris diam non eros. Morbi mollis aliquam
                metus a consectetur. Integer sit amet commodo odio.
              </p>
            </CardBody>
            <CardFooter>
              <p>This is the footer</p>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(UserProfile);
