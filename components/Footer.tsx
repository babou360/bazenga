import "../styles/home.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <a href="#">Google Play</a>
        <a href="#">Instagram</a>
        <a href="#">YouTube</a>
        <a href="#">TikTok</a>
      </div>
      <p>© {new Date().getFullYear()} Bazenga. All rights reserved.</p>
    </footer>
  );
}