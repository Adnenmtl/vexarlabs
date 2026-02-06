/*
  VexarLabs Header - Minimalist with Color Accent
*/

import { Link } from "wouter";

export default function Header() {
  return (
    <header className="py-5 border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <img 
            src="https://private-us-east-1.manuscdn.com/sessionFile/KjkPlQmy0eBADmP4aUc6MR/sandbox/ldPh4fyZe06bpLApHewG8P_1770353471294_na1fn_dmV4YXJsYWJzLWxvZ28taWNvbi1vbmx5.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvS2prUGxRbXkwZUJBRG1QNGFVYzZNUi9zYW5kYm94L2xkUGg0ZnlaZTA2YnBMQXBIZXdHOFBfMTc3MDM1MzQ3MTI5NF9uYTFmbl9kbVY0WVhKc1lXSnpMV3h2WjI4dGFXTnZiaTF2Ym14NS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GXLzFsNhFCGpSwYycKpJqxjPdTb0XbA7jOjiB-PUSE8gfmZGDayHUDc7gBLganRJ2PK73zic23zmyOfMy73Pj0e-lZhwjmr39l2XabV8LRdP9YrqpPEYJHU-wF9aEoxw2cMNsQ7B4OLhp~HrzpNAoiYjYHHkL~sl7TAE8XOqFwp6IIUJIW6~8vzox~HSGPBvehU4z9BgsDZXNSbHulHTa2ygSlgBov6SYnlsbo-fyoaOpLp3o3odWrgbJ6coWiZ73MuvWkoamL93qa5bs-M5VNL9-OY9XBF2UBljZ0KnA2CNl3ScYtd0LmFDc1BeJpuXN5l9Vd3kre9C0gFHV6ANKQ__" 
            alt="VexarLabs Logo" 
            className="w-32 h-32 object-contain"
          />
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
