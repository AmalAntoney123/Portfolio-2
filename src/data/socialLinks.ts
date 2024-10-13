import {
  faGithub,
  faLinkedin,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Strings from "@/constants/strings";
import type { ISocialLinkItem } from "@/types";

const socialLinks: ISocialLinkItem[] = [
  {
    name: Strings.github,
    url: "https://github.com/amalantoney123",
    icon: faGithub,
    text: "amalantoey123",
  },
  {
    name: Strings.linkedIn,
    url: "https://linkedin.com/in/amal-antoney",
    icon: faLinkedin,
    text: "amal_antoney",
  },
  {
    name: Strings.telegram,
    url: "https://telegram.me/Amal_antoney",
    icon: faTelegram,
    text: "@Amal_antoney",
  },
  {
    name: Strings.instagram,
    url: "https://instagram.com/amal_antoney",
    icon: faInstagram,
    text: "@amal_antoney",
  },
  {
    name: Strings.email,
    url: "mailto:amalantoney123@gmail.com",
    icon: faEnvelope,
    text: "amalantoney123@gmail.com",
  },
];

export default socialLinks;
