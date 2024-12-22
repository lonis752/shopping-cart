import {
  Envelope,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  TwitterLogo,
} from "phosphor-react";

export function Footer() {
  return (
    <footer>
      <div className="left">
        <h4>We didn't have what you were looking for?</h4>
        <p>Contact us here:</p>
        <div className="icons">
          <i>
            <LinkedinLogo size={32} />
          </i>
          <i>
            <TwitterLogo size={32} />
          </i>
          <i>
            <InstagramLogo size={32} />
          </i>
        </div>
        <div className="contacts">
          <i>
            <Envelope size={32} />
          </i>
          <p>: thestore@thestore123.org</p>
        </div>
        <div className="contacts">
          <i>
            <Phone size={32} />
          </i>
          <p>: (123) 123-4567</p>
        </div>
      </div>
      <img
        className="footerImage"
        src="./src/assets/hny2025.svg"
        alt="Kelly Sikkema"
      />
    </footer>
  );
}
