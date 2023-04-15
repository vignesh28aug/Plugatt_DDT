import Typography from "@mui/material/Typography";
import "./navbarsidebar.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <Typography className="footer_title">
          &#169; Virtual Energy Infrastructure Inc. All rights reserved
        </Typography>
        &nbsp; &nbsp;
        <Typography className="footer_subtitle">By VirtualEL</Typography>
      </div>
    </>
  );
}
export default Footer;
