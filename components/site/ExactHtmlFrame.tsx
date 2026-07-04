export default function ExactHtmlFrame() {
  return (
    <main className="fixed inset-0 h-screen w-screen overflow-hidden bg-black">
      <iframe
        title="Adrian Swish"
        src="/exact/adrian-swish-website-code.html"
        className="h-screen w-screen border-0 bg-black"
        allowFullScreen
      />
    </main>
  );
}
