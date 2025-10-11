import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#004aad] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Menu Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Shop Products</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">Refund Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Our Store Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Store</h3>
          <p className="mb-4 leading-relaxed">
            <strong>Sugar Bond</strong> is a direct-to-customer brand. Our products are 
            officially available <strong>only through our website</strong>.
          </p>
          <a href="#" className="underline hover:text-gray-200">Shop Products</a>
          <div className="flex space-x-4 mt-5">
            <a href="#" className="hover:text-gray-300"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gray-300"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gray-300"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Store Address Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Store Address</h3>
          <p className="leading-relaxed">
            Sugar Bond Foods,Konompara,<br />
            Melmuri (PO),<br />
            Malappuram - 676517
          </p>
        </div>
      </div>

      <div className="border-t border-white/30 mt-10 pt-5 text-center text-sm">
        © 2025, Sugar Bond — Accelerated by The eCom Show
      </div>
    </footer>
  );
}

