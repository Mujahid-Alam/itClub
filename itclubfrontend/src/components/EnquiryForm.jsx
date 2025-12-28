const EnquiryForm = () => (
  <div className="bg-white p-6 rounded shadow-xl border-t-4 border-it-blue">
    <h3 className="font-black text-center mb-4 text-it-blue border-b border-it-green/20 pb-2 uppercase tracking-tighter">Enquire Now</h3>
    <form className="space-y-4">
      <input type="text" placeholder="Enter Your Name" className="w-full p-2 border border-gray-300 rounded text-sm focus:border-it-green outline-none" />
      <input type="email" placeholder="Enter Your Email" className="w-full p-2 border border-gray-300 rounded text-sm focus:border-it-green outline-none" />
      <input type="text" placeholder="Mobile Number" className="w-full p-2 border border-gray-300 rounded text-sm focus:border-it-green outline-none" />
      <textarea placeholder="Enter Your Message" className="w-full p-2 border border-gray-300 rounded text-sm h-24 focus:border-it-green outline-none"></textarea>
      <button className="w-full bg-it-green text-white py-2 rounded font-bold hover:bg-it-blue transition shadow-md active:scale-95 uppercase tracking-widest">Submit</button>
    </form>
  </div>
);
export default EnquiryForm;