import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black bg-opacity-25 absolute w-full z-10">
      {/* Logo */}
      <div className="text-white text-xl font-bold">RUNO</div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link href="#home" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="text-white hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="#articles" className="text-white hover:underline">
            Articles
          </Link>
        </li>
        <li>
          <Link href="#contact" className="text-white hover:underline">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Navigation (Hamburger Menu) */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="text-white" />
        </SheetTrigger>
        <SheetContent className="w-[150px] bg-black text-white">
          <ul className="space-y-4">
            <li>
              <Link href="#home" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="#articles" className="hover:text-blue-600">
                Articles
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
