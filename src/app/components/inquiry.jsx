const InquiryForm = () => {
  return (
    <div className="bg-[#ECECEC] w-full  h-[676px] mx-auto flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-semibold mb-8">Send an Inquiry</h1>
      <form className="w-full max-w-[800px] space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full">
            <label htmlFor="name" className="block text-lg font-medium">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="w-full mt-4 md:mt-0">
            <label htmlFor="phone" className="block text-lg font-medium">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            className="mt-1 p-2 w-full h-32 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#2A2D36] text-white px-6 py-2 rounded hover:bg-gray-700 transition duration-200"
          >
            Send Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
