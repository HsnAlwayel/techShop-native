import React from "react";

// Styling
import { HomeBackground, OverLayContainer, Title, TopStyling, BottomStyling, ButtonStyled } from "./styles";

const Home = ({ navigation }) => {
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
                <ButtonStyled onPress={() => navigation.navigate("Vendors")}>
                    Vendors
                </ButtonStyled>
            </OverLayContainer>
        </HomeBackground>
    );
}
export default Home;