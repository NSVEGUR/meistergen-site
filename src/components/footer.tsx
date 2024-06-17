"use client";

import { useState } from "react";
import Logo from "@/lib/images/logo.png";
import Image from "next/image";
import { FooterLink } from "./footer-link";

const navigation = {
  general: [
    { name: "Geo Res", href: "/docs" },
    { name: "Home Automation", href: "/docs/reference/command-line-reference" },
    { name: "Blog", href: "/blog" },
    { name: "Releases", href: "https://github.com/vercel/turborepo/releases" },
    { name: "FAQ", href: "/docs/faq" },
  ],
  company: [
    { name: "GitHub", href: "https://github.com/vercel" },
    { name: "Twitter", href: "https://twitter.com/vercel" },
    { name: "Linkedin", href: "https://twitter.com/vercel" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="py-8 mx-auto max-w-7xl">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="md:grid md:grid-cols-3 md:gap-8 col-span-2">
            <div>
              <h3 className="text-sm text-gray-900 dark:text-white">
                Products
              </h3>
              <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                {navigation.general.map((item) => (
                  <li key={item.name}>
                    <FooterLink href={item.href}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-gray-900 dark:text-white">Company</h3>
              <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <FooterLink href={item.href}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm text-gray-900 dark:text-white">Legal</h3>
              <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <FooterLink href={item.href}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-sm text-gray-900 dark:text-white">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-500">
              Join the Turborepo newsletter and stay updated on new releases and
              features, guides, and case studies.
            </p>
            <SubmitForm />
          </div>
        </div>

        <div className="pt-8 mt-8 md:flex md:items-center md:justify-between">
          <div>
            <Image
              src={Logo}
              alt="meistergen"
              width={100}
              height={100}
              className="w-16"
            />
            <p className="mt-4 text-xs text-gray-500 ">
              &copy; {new Date().getFullYear()} Meistergen Technologies. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SubmitForm() {
  const [email, setEmail] = useState("");
  return (
    <form className="mt-4 sm:flex sm:max-w-md" onSubmit={(e) => {}}>
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        name="email-address"
        id="email-address"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-zinc-100 border border-transparent rounded-md appearance-none dark:text-white sm:text-sm dark:border-gray-700 dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:border-white focus:placeholder-gray-400"
        placeholder="you@domain.com"
      />
      <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button
          type="submit"
          className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-black dark:bg-white dark:text-black border border-transparent rounded-md sm:text-sm betterhover:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white dark:betterhover:hover:bg-gray-300"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
