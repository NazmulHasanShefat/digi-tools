import FacebookIcon from "../ui/FacebookIcon";
import InstagramIcon from "../ui/InstagramIcon";
import LogoMain from "../ui/LogoMain";
import XIcon from "../ui/XIcon";


const FooterSection = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
       <LogoMain />
        <p>
          Premium digital tools for creators, <br /> professionals,
          and businesses. Work smarter <br /> with our suite of powerful tools.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Product</h6>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Templates</a>
        <a className="link link-hover">Integrations</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press</a>
      </nav>
      <nav>
        <h6 className="footer-title">Resources</h6>
        <a className="link link-hover">Documentation</a>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">Community</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social Links</h6>
        <div className="flex justify-center items-center gap-3">
        <a href="" className="link link-hover"><InstagramIcon /> </a>
        <a href="" className="link link-hover"><FacebookIcon /> </a>
        <a href="" className="link link-hover"><XIcon /> </a>
        </div>
      </nav>
    </footer>
  );
};

export default FooterSection;
