import "../css partials/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        <a
          href="https://github.com/OlesiaTr/shecodes-weather-app-react"
          className="footer-link"
        >
          open-source code,
        </a>
        by Olesia Trebina and deployed{" "}
        <a href="https://calm-kitten-20b763.netlify.app">on Netlify</a>
      </p>
    </footer>
  );
}
