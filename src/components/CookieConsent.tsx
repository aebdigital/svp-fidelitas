"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

type CookiePreferences = {
  functional: boolean;
  statistics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "svp-cookie-preferences-v1";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const defaultPreferences: CookiePreferences = {
  functional: true,
  statistics: false,
  marketing: false,
};

const subscribe = () => () => {};

function readStoredPreferences(): CookiePreferences | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookiePreferences>;
    return {
      functional: true,
      statistics: Boolean(parsed.statistics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

function ToggleRow({
  title,
  description,
  checked,
  onToggle,
  disabled = false,
}: {
  title: string;
  description: string;
  checked: boolean;
  onToggle: () => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-[6px] border border-[#e5e5e5] p-4">
      <div>
        <p className="text-[17px] font-semibold text-black font-heading">{title}</p>
        <p className="mt-1 text-[15px] text-[#6a6a6a] font-heading">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        onClick={onToggle}
        disabled={disabled}
        className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
          checked ? "bg-[#ed2024]" : "bg-gray-300"
        } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

export default function CookieConsent() {
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  const savedPreferences = isClient ? readStoredPreferences() : null;

  const showBanner = isClient && !savedPreferences && !showSettings;

  const openSettings = () => {
    setPreferences(savedPreferences ?? defaultPreferences);
    setShowSettings(true);
  };

  useEffect(() => {
    if (!isClient) return;

    const handleOpen = () => {
      setPreferences(readStoredPreferences() ?? defaultPreferences);
      setShowSettings(true);
    };

    window.addEventListener("open-cookie-settings", handleOpen);
    return () => window.removeEventListener("open-cookie-settings", handleOpen);
  }, [isClient]);

  const persistPreferences = (nextPreferences: CookiePreferences) => {
    const normalized: CookiePreferences = {
      functional: true,
      statistics: nextPreferences.statistics,
      marketing: nextPreferences.marketing,
    };

    setPreferences(normalized);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    document.cookie = `svp_cookie_consent=true; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
    document.cookie = `svp_cookie_preferences=${encodeURIComponent(
      JSON.stringify(normalized),
    )}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;

    setShowSettings(false);
  };

  const acceptAll = () =>
    persistPreferences({
      functional: true,
      statistics: true,
      marketing: true,
    });

  const rejectOptional = () =>
    persistPreferences({
      functional: true,
      statistics: false,
      marketing: false,
    });

  if (!isClient) return null;

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-4 left-0 right-0 z-[80]">
          <div className="mx-auto w-[90vw] rounded-[6px] border border-white/30 bg-[#ed2024] p-4 shadow-[0_16px_32px_rgba(0,0,0,0.22)] md:p-5">
            <p className="text-[16px] text-white leading-relaxed font-heading">
              Táto stránka používa súbory cookie na funkčnosť, štatistiku a marketing.
              Pokračovaním vyjadrujete súhlas s ich používaním.
              {" "}
              <Link href="/cookies" className="text-white underline hover:opacity-90">
                Zásady cookies
              </Link>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={acceptAll}
                className="bg-black px-4 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-[#1a1a1a] font-heading shadow-[0_4px_14px_rgba(0,0,0,0.35)]"
              >
                Prijať všetko
              </button>
              <button
                type="button"
                onClick={rejectOptional}
                className="bg-white px-4 py-2 text-[15px] font-semibold text-black transition-colors hover:bg-[#f2f2f2] font-heading"
              >
                Odmietnuť voliteľné
              </button>
              <button
                type="button"
                onClick={openSettings}
                className="bg-white px-4 py-2 text-[15px] font-semibold text-black transition-colors hover:bg-[#f2f2f2] font-heading"
              >
                Nastavenia cookies
              </button>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <>
          <button
            type="button"
            aria-label="Zatvoriť nastavenia cookies"
            onClick={() => setShowSettings(false)}
            className="fixed inset-0 z-[85] bg-black/50"
          />
          <section className="fixed inset-0 z-[90] flex items-center justify-center p-4">
            <div className="w-[90vw] border border-[#e5e5e5] bg-white p-5 shadow-[0_16px_48px_rgba(0,0,0,0.25)] md:max-w-[760px]">
              <div className="mb-4">
                <h3 className="text-[28px] font-bold text-black font-heading">Nastavenia cookies</h3>
                <p className="mt-2 text-[16px] text-[#6a6a6a] leading-relaxed font-heading">
                  Vyberte, ktoré typy súborov cookie chcete povoliť.
                  {" "}
                  <Link href="/cookies" className="text-[#ed2024] hover:underline">
                    Prečítať zásady cookies
                  </Link>
                </p>
              </div>

              <div className="space-y-3">
                <ToggleRow
                  title="Funkčné"
                  description="Nevyhnutné pre správne fungovanie webu."
                  checked={preferences.functional}
                  onToggle={() => {}}
                  disabled
                />
                <ToggleRow
                  title="Štatistické"
                  description="Pomáhajú nám zlepšovať obsah a výkon stránky."
                  checked={preferences.statistics}
                  onToggle={() =>
                    setPreferences((prev) => ({ ...prev, statistics: !prev.statistics }))
                  }
                />
                <ToggleRow
                  title="Marketingové"
                  description="Používajú sa na personalizáciu reklamy a obsahu."
                  checked={preferences.marketing}
                  onToggle={() =>
                    setPreferences((prev) => ({ ...prev, marketing: !prev.marketing }))
                  }
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => persistPreferences(preferences)}
                  className="border border-[#d8d8d8] px-4 py-2 text-[15px] font-semibold text-black transition-colors hover:bg-[#f5f5f5] font-heading"
                >
                  Uložiť výber
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="bg-[#ed2024] px-4 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-[#cc1b1f] font-heading"
                >
                  Prijať všetko
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
