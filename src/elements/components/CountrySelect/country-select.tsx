"use client";
import { useMemo, useState } from "react";

import {
  type TCountryCode,
  getCountryDataList,
  getCountryData,
} from "countries-list";
import Flags from "country-flag-icons/react/3x2";
import { hasFlag } from "country-flag-icons";
import { motion } from "framer-motion";
import * as Select from "@radix-ui/react-select";

import cn from "@/lib/cn";
import RotatableArrow from "@/elements/shared/rotatable-arrow";

export default function CountrySelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountryIso2, setSelectedCountryIso2] =
    useState<TCountryCode | null>(null);

  const countriesList = useMemo(() => getCountryDataList().slice(0, 50), []);
  const selectedCountry = useMemo(() => {
    if (!selectedCountryIso2) return null;
    return getCountryData(selectedCountryIso2);
  }, [selectedCountryIso2]);
  return (
    <Select.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      onValueChange={(e: TCountryCode) => setSelectedCountryIso2(e)}
    >
      <Select.Trigger
        className={cn(
          "relative z-10 flex w-[200px] cursor-pointer items-center gap-3 rounded bg-white p-[17px] font-medium text-[#191D23]",
          {
            "rounded-b-none": isOpen,
          },
        )}
      >
        {selectedCountryIso2 ? (
          <>
            <Flag ios2={selectedCountryIso2} />
            <span className="line-clamp-1 text-left">
              {selectedCountry?.name}
            </span>
          </>
        ) : (
          <span>Select a country</span>
        )}
        <div className="ml-auto">
          <RotatableArrow isUp={isOpen} />
        </div>
      </Select.Trigger>

      <Select.Portal>
        {isOpen && (
          <Select.Content
            asChild
            className="!max-h-[400px] w-[200px] rounded-b bg-white p-[9px] text-black"
            autoFocus
            position="popper"
          >
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Select.Viewport>
                {countriesList.map((country) => (
                  <Select.Item
                    value={country.iso2}
                    key={country.iso2}
                    className={cn(
                      "mb-2 flex w-full cursor-pointer items-start gap-3 rounded p-2 focus-visible:bg-gray-100/60 focus-visible:outline-none",
                      {
                        "bg-gray-100/60": selectedCountryIso2 === country.iso2,
                      },
                    )}
                  >
                    <Flag ios2={country.iso2} />
                    <div>
                      <span className="line-clamp-1 leading-5">
                        {country.name}
                      </span>
                      <span className="mt-[6px] block text-xs font-light text-slate-500">
                        {country.iso3}
                      </span>
                    </div>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </motion.div>
          </Select.Content>
        )}
      </Select.Portal>
    </Select.Root>
  );
}

const Flag = ({ ios2 }: { ios2: TCountryCode }) => {
  if (!hasFlag(ios2)) return null;

  const Comp = Flags[ios2];
  return <Comp className="h-4 w-5 shrink-0" />;
};
