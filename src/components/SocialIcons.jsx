import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"
import { StyledSocialIcons } from "./styled/SocialIconsStyles"

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com/_hamzaozturk">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/hamza-%C3%B6zt%C3%BCrk/">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  )
}
