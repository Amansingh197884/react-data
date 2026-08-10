import React, { createContext, useContext, useState } from 'react';
import LeadPopupModal from './LeadPopupModal';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState('AriahausEstate');

  const openPopup = (name = 'AriahausEstate') => {
    setProjectName(name);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      <LeadPopupModal isOpen={isOpen} onClose={closePopup} projectName={projectName} />
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};