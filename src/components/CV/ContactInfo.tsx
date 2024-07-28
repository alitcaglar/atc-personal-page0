export default function ContactInfo() {
  return (
    <div className="p-6 text-slate-800">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

      <div className="mb-4 text-stone-800">
        <h3 className="text-lg font-semibold">Email:</h3>
        <p>
          <a
            href="mailto:aliturabicaglar@gmail.com"
            className="text-blue-600 hover:underline"
          >
            aliturabicaglar@gmail.com
          </a>
        </p>
      </div>

      <div className="mb-4 text-stone-800">
        <h3 className="text-lg font-semibold">Phone:</h3>
        <p>
          <a href="tel:+905388456910" className="text-blue-600 hover:underline">
            +90 538 845 6910
          </a>
          <span className="text-sm text-gray-600"> (Mobile and WhatsApp)</span>
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">LinkedIn:</h3>
        <p>
          <a
            href="https://www.linkedin.com/in/ali-turabi-%C3%A7a%C4%9Flar-790283104/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/ali-turabi-caglar/
          </a>
        </p>
      </div>
    </div>
  );
}
