import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ProductsView } from './components/ProductsView';
import { ServicesView } from './components/ServicesView';
import { GalleryView } from './components/GalleryView';
import { InvestorsView } from './components/InvestorsView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';

import { EcaeVerificationModal } from './components/EcaeVerificationModal';
import { CableCalculatorModal } from './components/CableCalculatorModal';
import { RfqDossierModal } from './components/RfqDossierModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [ecaeModalOpen, setEcaeModalOpen] = useState(false);
  const [calculatorModalOpen, setCalculatorModalOpen] = useState(false);
  const [rfqModalOpen, setRfqModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D1216] text-slate-100 font-sans selection:bg-[#C9793A] selection:text-white flex flex-col justify-between">
      
      {/* Top Fixed Clean Navbar */}
      <Navbar
        onOpenEcaeModal={() => setEcaeModalOpen(true)}
        onOpenCalculatorModal={() => setCalculatorModalOpen(true)}
        onOpenRfqModal={() => setRfqModalOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Tab View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            onOpenEcaeModal={() => setEcaeModalOpen(true)}
            onOpenCalculatorModal={() => setCalculatorModalOpen(true)}
            onOpenRfqModal={() => setRfqModalOpen(true)}
            onSelectTab={setActiveTab}
          />
        )}

        {activeTab === 'about' && (
          <AboutView
            onOpenEcaeModal={() => setEcaeModalOpen(true)}
            onOpenRfqModal={() => setRfqModalOpen(true)}
            onSelectTab={setActiveTab}
          />
        )}

        {activeTab === 'products' && (
          <ProductsView
            onOpenRfqModal={() => setRfqModalOpen(true)}
            onOpenEcaeModal={() => setEcaeModalOpen(true)}
          />
        )}

        {activeTab === 'services' && (
          <ServicesView
            onOpenRfqModal={() => setRfqModalOpen(true)}
            onOpenEcaeModal={() => setEcaeModalOpen(true)}
            onOpenCalculatorModal={() => setCalculatorModalOpen(true)}
          />
        )}

        {activeTab === 'gallery' && (
          <GalleryView />
        )}

        {activeTab === 'investors' && (
          <InvestorsView
            onOpenRfqModal={() => setRfqModalOpen(true)}
            onOpenEcaeModal={() => setEcaeModalOpen(true)}
          />
        )}

        {activeTab === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Clean Modern Footer */}
      <Footer
        onOpenEcaeModal={() => setEcaeModalOpen(true)}
        onOpenCalculatorModal={() => setCalculatorModalOpen(true)}
        onOpenRfqModal={() => setRfqModalOpen(true)}
        onSelectTab={setActiveTab}
      />

      {/* Interactive Global Modals */}
      <EcaeVerificationModal
        isOpen={ecaeModalOpen}
        onClose={() => setEcaeModalOpen(false)}
        onOpenRfq={() => setRfqModalOpen(true)}
      />

      <CableCalculatorModal
        isOpen={calculatorModalOpen}
        onClose={() => setCalculatorModalOpen(false)}
        onOpenRfq={() => setRfqModalOpen(true)}
      />

      <RfqDossierModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
      />

    </div>
  );
}
