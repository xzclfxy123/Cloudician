"use client";
import { addUser } from "@/lib/actions";

export default function Page() {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     setTimeout(() => {
//       const popup = document.getElementById("popup");
//       if (popup) {
//         popup.style.display = "flex";
//         setTimeout(() => {
//           popup.style.display = "none";
//         }, 2000);
//       }
//     }, 1000);
//   };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Get in Touch
        </h1>
        <p className="text-center text-gray-600 mb-8">
          如果您对我们的服务或合作有任何疑问，请随时联系我们。我们很乐意与任何人交流。
          <br />
          您可以发送电子邮件至{" "}
          <a href="mailto:email@Cloudician" className="text-blue-500 underline">
            email@Cloudician
          </a>{" "}
          或在下方留言与我们联系。
        </p>
        <form action={addUser} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              required
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Message"
            name="message"
            required
            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            提交
          </button>
        </form>

        {/* <div
          id="popup"
          style={{ display: "none" }}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-xl font-bold mb-2">提交成功！</h2>
            <p className="text-gray-600">感谢您的留言，我们会尽快回复您！</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
