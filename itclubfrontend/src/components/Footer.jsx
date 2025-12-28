const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 mt-12 py-10">
    <div className="max-w-7xl mx-auto px-4">
      {/* Affiliations Section */}
      <h4 className="text-center font-bold mb-8 text-gray-400 uppercase tracking-widest text-sm">
        Affiliations, Promoting, Associated Activities
      </h4>
      <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
         <div className="h-14 w-28 bg-white/10 flex items-center justify-center rounded border border-white/10">Logo 1</div>
         <div className="h-14 w-28 bg-white/10 flex items-center justify-center rounded border border-white/10">Logo 2</div>
         <div className="h-14 w-28 bg-white/10 flex items-center justify-center rounded border border-white/10 text-blue-400 font-bold">IISDT</div>
         <div className="h-14 w-28 bg-white/10 flex items-center justify-center rounded border border-white/10">Logo 4</div>
      </div>
      
      {/* Bottom Info */}
      <div className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="text-center md:text-left">
          <p className="font-semibold text-gray-400">ITCLUB Technologies Private Limited</p>
          <p>© 2025 All rights reserved. Register Under the companies Act 2013</p>
        </div>
        <div className="text-center md:text-right space-y-1">
          <p>Head Office: ITCLUB Building, Holding no. 0013, Azad Nagar, Madhopara,</p>
          <p>Bhatta Bazar, Purnea - 854301 (Bihar)</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;