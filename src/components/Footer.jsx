import SocialIcons from "./SocialIcons"
import Container from "./styled/Container"
import Flex from "./styled/Flex"
import StyledFooter from "./styled/FooterStyles"
import Image from "./styled/Image"

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <Image src="./images/logo_white.png" alt="" />
        </Flex>

        <Flex>
          <ul>
            <li>Ankara , Turkey</li>
            <li> +90 (535) 493 54 56</li>
            <li>oztrkhamza1@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>
      </Container>
    </StyledFooter>
  )
}
