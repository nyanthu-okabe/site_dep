export default function Donate() {
  return (
    <section id="donate">
      <h2>Donate</h2>
      <p>Your support helps us keep our servers and projects running!</p>
      <button
        class="donateBtn"
        onclick="window.open('https://www.amazon.jp/hz/wishlist/ls/2X7F14KM6QMLC?ref_=wl_share', '_blank')"
      >
        Donate
      </button>

      <span>
        to <strong>Nyanthu</strong>
      </span>
    </section>
  );
}
