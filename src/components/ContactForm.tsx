"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json.error || "Nepodarilo sa odoslať správu.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Chyba pripojenia. Skúste to znova.");
      setStatus("error");
    }
  }

  return (
    <div>
      <h2 className="text-[38px] font-bold text-black mb-8 font-heading">
        Napíšte nám
      </h2>

      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 p-6 text-green-800 text-[17px] font-heading">
          Ďakujeme! Vaša správa bola úspešne odoslaná. Ozveme sa vám čo najskôr.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[17px] font-bold text-black mb-2 font-heading">
              Meno a priezvisko
            </label>
            <input
              name="name"
              type="text"
              required
              className="w-full border border-gray-300 rounded-[3px] px-4 py-3 text-[17px] text-black outline-none focus:border-[#ed2024] transition-colors font-heading"
              placeholder="Vaše meno"
            />
          </div>
          <div>
            <label className="block text-[17px] font-bold text-black mb-2 font-heading">
              E-mail
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded-[3px] px-4 py-3 text-[17px] text-black outline-none focus:border-[#ed2024] transition-colors font-heading"
              placeholder="vas@email.sk"
            />
          </div>
          <div>
            <label className="block text-[17px] font-bold text-black mb-2 font-heading">
              Telefón
            </label>
            <input
              name="phone"
              type="tel"
              className="w-full border border-gray-300 rounded-[3px] px-4 py-3 text-[17px] text-black outline-none focus:border-[#ed2024] transition-colors font-heading"
              placeholder="+421 ..."
            />
          </div>
          <div>
            <label className="block text-[17px] font-bold text-black mb-2 font-heading">
              Správa
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-[3px] px-4 py-3 text-[17px] text-black outline-none focus:border-[#ed2024] transition-colors resize-none font-heading"
              placeholder="Opíšte, s čím vám môžeme pomôcť..."
            />
          </div>

          {status === "error" && (
            <div className="bg-red-50 border border-red-200 p-4 text-red-700 text-[15px] font-heading">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-[#ed2024] text-white font-medium text-[18px] px-[33px] py-[16px] hover:scale-[1.04] transition-transform disabled:opacity-60 disabled:hover:scale-100"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {status === "sending" ? "Odosielam..." : "Odoslať správu"}
          </button>
        </form>
      )}
    </div>
  );
}
