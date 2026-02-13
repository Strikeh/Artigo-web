export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold gradient-text mb-4">404</h1>
        <p className="text-xl text-text-secondary mb-8">Page not found</p>
        <a href="/" className="btn-primary px-8 py-4">
          Back to Home
        </a>
      </div>
    </div>
  );
}
