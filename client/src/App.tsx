import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Support from "./pages/Support";
import AppPrivacy from "./pages/AppPrivacy";
import RondeSecuriteTaxi from "./pages/RondeSecuriteTaxi";
import FMarabia from "./pages/app/FMarabia";
import Influvo from "./pages/app/Influvo";
import UnderConstruction from "./pages/UnderConstruction";
import { useState, useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/support" component={Support} />
      <Route path="/app/ronde-securite-taxi" component={RondeSecuriteTaxi} />
      <Route path="/app/fmarabia" component={FMarabia} />
      <Route path="/app/influvo" component={Influvo} />
      <Route path="/app/:appId/privacy" component={AppPrivacy} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Check if site is already unlocked in this session
    const unlocked = sessionStorage.getItem("vexarlabs_unlocked");
    if (unlocked === "true") {
      setIsUnlocked(true);
    }
  }, []);

  if (!isUnlocked) {
    return (
      <ErrorBoundary>
        <ThemeProvider defaultTheme="light">
          <LanguageProvider>
            <TooltipProvider>
              <Toaster />
              <UnderConstruction onUnlock={() => setIsUnlocked(true)} />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
