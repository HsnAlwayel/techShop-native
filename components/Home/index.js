import React from "react";

// Styling
import { HomeBackground, OverLayContainer, Title, TopStyling, BottomStyling, ButtonStyled } from "./styles";

const Home = () => {
    return (
        <HomeBackground
            source={{
                uri:
                    "https://wallpapercave.com/wp/wp2662054.png",
            }}
        >
            <OverLayContainer>
                <TopStyling>
                    <Title>TechShop</Title>
                </TopStyling>
                <ButtonStyled onPress={() => alert("Take me to the list of Vendors")}>
                    Click here to skip
                </ButtonStyled>
            </OverLayContainer>
        </HomeBackground>
    );
}
export default Home;