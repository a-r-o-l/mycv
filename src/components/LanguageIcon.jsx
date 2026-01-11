import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

export default function LanguageIcon() {
  const [currentLang, setCurrentLang] = useState("ES");

  useEffect(() => {
    // Obtener idioma actual de la URL
    const path = window.location.pathname;
    const urlLang = path.includes("/en/") ? "EN" : "ES";
    setCurrentLang(urlLang);
  }, []);

  const handleLanguageChange = (lang, label) => {
    setCurrentLang(label);
    localStorage.setItem("preferred-language", lang);

    // Cambiar la URL para reflejar el nuevo idioma
    const baseUrl = window.location.origin;

    if (lang === "en") {
      // Ir a /mycv/en/
      window.location.href = `${baseUrl}/mycv/en/`;
    } else {
      // Ir a /mycv/
      window.location.href = `${baseUrl}/mycv/`;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="">
          <Globe className="w-5 h-5" />
          <span className="text-sm">{currentLang}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem
          onClick={() => handleLanguageChange("es", "ES")}
          className="cursor-pointer"
        >
          <span className="mr-2">🇪🇸</span>
          <span>Español</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("en", "EN")}
          className="cursor-pointer"
        >
          <span className="mr-2">🇺🇸</span>
          <span>English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
