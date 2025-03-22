
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { LanguageProvider } from "./context/LanguageContext";
import { useTranslation } from "react-i18next";

const queryClient = new QueryClient();

// Root component with language direction support
const AppContent = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  
  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-sans rtl' : 'font-sans'}>
      <Routes>
        <Route path="/*" element={<Index />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
