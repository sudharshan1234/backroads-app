import PageIcons from "./PageIcons";
import PageLinks from "./PageLinks";
function Footer() {
  return (
    <footer className='section footer'>
      <PageLinks type='footer'></PageLinks>
      <PageIcons type='footer'></PageIcons>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}
export default Footer;
