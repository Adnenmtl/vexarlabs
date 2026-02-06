/*
  VexarLabs Header - Minimalist with Color Accent
*/

import { Link } from "wouter";

export default function Header() {
  return (
    <header className="py-5 border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="https://private-us-east-1.manuscdn.com/sessionFile/KjkPlQmy0eBADmP4aUc6MR/sandbox/yEEr4UTyrqfAr80rTb3EDI_1770352302672_na1fn_dmV4YXJsYWJzLWxvZ28.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvS2prUGxRbXkwZUJBRG1QNGFVYzZNUi9zYW5kYm94L3lFRXI0VVR5cnFmQXI4MHJUYjNFRElfMTc3MDM1MjMwMjY3Ml9uYTFmbl9kbVY0WVhKc1lXSnpMV3h2WjI4LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HL2vLE1p4qtyFaL6FqIVfbkGmh--nOG7qd2CqEmUEEaumP7IUqYd10BswqHOiCnPh6baG-b4jZ5Hiw7WEkPQkaiMFGygl56O658pxxFzQC5PTpsgP~WKsad2QSvH4I~KzJv9w-vwnxIFwqmsmW0srjL5uBDMplX3Lwb4VSknJVQfOnqd2A-kVJoAX0eM-Z1f8xuCpneomudyEaei8P8pHRYeMujbmQV2BwN-oQ0u3teBarxu7iMY5LEwcWvcqViMQ~WNAe39NLbhIJc8~npq~jh6exLGv-K46hqGJWGgCzsdOqMZ8JdgbGdGmPiqk1iq2AyzUkt6O6OVkLvoB7Nn9w__" 
            alt="VexarLabs Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-semibold tracking-tight">VexarLabs</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/#apps" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Applications
          </Link>
          <Link href="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Support
          </Link>
        </nav>
      </div>
    </header>
  );
}
