import "./navigationBar.css";

type FontProps = {
  changedFontSize: Number;
};

function Description({ changedFontSize }: FontProps) {
  const defaultSize = 14;
  return (
    <div>
      <h3 style={{ fontSize: 19 + Number(changedFontSize) }}>
        Vertical Mobile Navbar
      </h3>
      <p style={{ fontSize: defaultSize + Number(changedFontSize) }}>
        This example demonstrates how a navigation menu on a mobile/smart phone
        could look like.
      </p>
      <p style={{ fontSize: defaultSize + Number(changedFontSize) }}>
        Click on the hamburger menu (three bars) in the top right corner, to
        toggle the menu.
      </p>
    </div>
  );
}

export default Description;
