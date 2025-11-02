export default function Chatbot() {
  return (
    <section id="chatbot">
      <iframe
        style="width: 100%; height: 800px; border: none;"
        src="https://nyanthubot.nyanthu.com/"
        scrolling="no"
        frameborder="0"
        onload="resizeIframe(this)"
      ></iframe>
      <a href="https://nyanthubot.nyanthu.com">nyanthubot.nyanthu.com</a>
    </section>
  );
}
