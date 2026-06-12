"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function FloatingWhatsapp() {
  const [isOpen, setIsOpen] = useState(false);
  const myWhatsAppNumber = "919904484312"; // 👈 અહીં તમારો સાચો નંબર લખી દેજો

  const handleStartChat = () => {
    const defaultMessage = "Hi Iconic Car Care, I want to inquire about car detailing services! 🚗✨";
    const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    // આ સ્ટાઇલ તેને બધી વસ્તુઓની ઉપર (z-[9999]) જબરદસ્તી બતાવશે
    <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 99999, fontFamily: "sans-serif" }}>
      
      {/* ચેટ બોક્સ પૉપ-અપ */}
      {isOpen && (
        <div style={{ marginBottom: "16px", width: "320px", overflow: "hidden", borderRadius: "16px", backgroundColor: "#09090b", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)", border: "1px solid rgba(255,255,255,0.1)" }}>
          
        <div style={{ backgroundColor: "#075E54", padding: "16px", color: "white", display: "flex", alignItems: "center", gap: "12px" }}> 
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ position: "relative", width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                ICC
                <span style={{ position: "absolute", bottom: "0", right: "0", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#22c55e", border: "2px solid #075E54" }} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: "14px", fontWeight: 600 }}>Iconic Car Care</h4>
                <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.8)" }}>Online • Replies in an hour</p>
              </div>
            </div>
          </div>

          {/* મેસેજ બોડી */}
          <div style={{ backgroundColor: "#efeae2", padding: "16px", minHeight: "80px", display: "flex", alignItems: "center" }}>
            <div style={{ borderRadius: "12px", borderTopLeftRadius: "0", backgroundColor: "white", padding: "12px", fontSize: "14px", color: "#27272a", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
              <p style={{ margin: "0 0 4px 0", color: "#075E54", fontSize: "12px", fontWeight: "bold" }}>Iconic Support</p>
              નમસ્તે! તમારી ગાડી માટે PPF, કોટિંગ કે ડિટેલિંગનું બુકિંગ કરાવવું છે? અમને અહીં મેસેજ કરો! 🚗✨
            </div>
          </div>

          {/* બટન */}
          <div style={{ backgroundColor: "white", padding: "12px" }}>
            <button
              onClick={handleStartChat}
              style={{ flex: "1", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", borderRadius: "12px", backgroundColor: "#25D366", padding: "10px", fontSize: "14px", fontWeight: "bold", color: "white", border: "none", cursor: "pointer" }}
            >
              <Send size={16} />
              Start Chat on WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* વૉટ્સએપ ગોળ બટન */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: isOpen ? "#dc2626" : "#25D366", color: "white", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)" }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} fill="currentColor" />}
      </button>
    </div>
  );
}