import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { href: "#kezdolap", label: "Kezdőlap" },
  { href: "#elonyok", label: "Előnyök" },
  { href: "#tanusitvany", label: "Tanusítvány" },
  { href: "#velemenyek", label: "Vélemények" },
  { href: "#arkalkulator", label: "Árkalkulátor" },
  { href: "#gyakoriKerdesek", label: "Gyakori kérdések" },
  { href: "#kapcsolat", label: "Kapcsolat" },
];

export default function Navbar() {
  return (
    <nav className="fixed w-[80vw] top-3 left-[50%] ml-[-40vw] bg-white shadow-sm px-6 py-4 rounded-full mx-auto flex items-center justify-between border z-50">
      <Image
        src={"/images/logo.png"}
        width={60}
        height={32}
        className="h-8 w-15"
        alt="logo"
      />
      {/* Mobile Navigation Menu */}
      <NavigationMenu className="lg:hidden">
        <NavigationMenuList className="space-x-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger />
            <NavigationMenuContent className="bg-white p-4 shadow text-center md:w-[80vw]">
              {navigationItems.map((item) => (
                <NavigationMenuLink
                  key={item.href}
                  href={item.href}
                  className="block px-2 py-2 hover:bg-gray-100 rounded"
                >
                  {item.label}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/* Desktop Navigation Menu */}
      <div className="hidden lg:flex space-x-4 text-sm">
        {navigationItems.map((item) => {
          if (item.label === "Kapcsolat") {
            return; // Skip rendering "Kapcsolat" in the desktop menu
          }
          return (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 hover:bg-gray-100 rounded"
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <Link
        href={"#kapcsolat"}
        className="hidden lg:block px-4 py-2 bg-[#3A8B5B] text-white rounded hover:bg-[#2a6f4a]"
      >
        Kapcsolat
      </Link>
    </nav>
  );
}
