"use client";

import React, { createContext, useContext, useState } from "react";
import ResumeModal from "@/components/ResumeModal";

interface ResumeModalContextType {
  openResumeModal: () => void;
  closeResumeModal: () => void;
  isResumeModalOpen: boolean;
}

const ResumeModalContext = createContext<ResumeModalContextType | undefined>(undefined);

export function ResumeModalProvider({ children }: { children: React.ReactNode }) {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => setIsResumeModalOpen(false);

  return (
    <ResumeModalContext.Provider
      value={{
        openResumeModal,
        closeResumeModal,
        isResumeModalOpen,
      }}
    >
      {children}
      {isResumeModalOpen && (
        <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
      )}
    </ResumeModalContext.Provider>
  );
}

export function useResumeModal() {
  const context = useContext(ResumeModalContext);
  if (!context) {
    throw new Error("useResumeModal must be used within a ResumeModalProvider");
  }
  return context;
}
