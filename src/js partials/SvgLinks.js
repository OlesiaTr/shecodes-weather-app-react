import "../css partials/SvgLinks.css";
// import mySvg from "./imgs/symbol-defs.svg"

export default function SvgLinks() {
  return (
    <section className="SvgLinks">
      <ul className="svg-links">
        <li>
          <svg className="svg-img" width="40" height="40">
            <use href="./imgs/symbol-defs.svg#icon-wind"></use>
          </svg>
        </li>
        <li>
          <svg className="svg-img" width="40" height="40">
            <use href="./imgs/symbol-defs.svg#icon-drupal"></use>
          </svg>
        </li>
      </ul>
      <ul className="svg-links">
        <li id="wind-speed"></li>
        <li id="humidity"></li>
      </ul>
    </section>
  );
}
