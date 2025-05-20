import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t py-8 mt-12">
      <div className="container mx-auto">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                  Subscribe to our newsletter
                </h3>
                <p className="text-neutral-400 max-w-md">
                  Stay updated with the latest products, exclusive offers, and
                  style tips. Join our community today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-purple-500"
                />
                <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  {SITE_CONFIG.name}
                </span>
              </Link>
              <p className="text-neutral-400 mb-6">
                Intelligent AI Agent for your business needs. Automate, analyze,
                and optimize.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-purple-400 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-purple-400 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-purple-400 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-purple-400 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/shop"
                    className="text-neutral-400 hover:text-purple-400 transition-colors"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="text-neutral-400 hover:text-purple-400 transition-colors"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/new-arrivals"
                    className="text-neutral-400 hover:text-purple-400 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sale"
                    className="text-neutral-400 hover:text-purple-400 transition-colors"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gift-cards"
                    className="text-neutral-400 hover:text-purple-400 transition-colors"
                  >
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/account"
                    className="text-neutral-400 hover:text-purple-400 transition-colors"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="/orders"
                    className="text-neutral-400 hover:text-purple-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wishlist"
                    className="text-neutral-400 hover:text-purple-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="text-neutral-400 hover:text-purple-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/account/settings"
                    className="text-neutral-400 hover:text-purple-400 transition-colors"
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-400">
                    123 Fashion Street, Design District
                    <br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                  <span className="text-neutral-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                  <span className="text-neutral-400">support@shopify.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-2 pt-8 border-t text-center text-muted-foreground">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
