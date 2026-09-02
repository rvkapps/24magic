import type React from "react";
import { useState } from "react";
import type { ConsultationBooking } from "../types";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ConsultationBooking>({
    name: "",
    email: "",
    companyName: "",
    monthlyRevenue: "$10k - $50k",
    servicesNeeded: ["Bookkeeping"],
    preferredDate: "",
    preferredTime: "10:00 AM EST",
    notes: "",
  });

  if (!isOpen) return null;

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(service);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== service)
          : [...prev.servicesNeeded, service],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#dfbfc3]/40 relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#584145] hover:text-[#830036] p-1.5 rounded-full hover:bg-[#fbf1f2] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#a61d4c]/10 text-[#830036] rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">
                check_circle
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#1f1a1b]">
              Consultation Confirmed!
            </h3>
            <p className="text-sm text-[#584145] max-w-md mx-auto">
              Thank you,{" "}
              <strong className="text-[#1f1a1b]">{formData.name}</strong>. A
              24MAGIC bookkeeping specialist has reserved your discovery call slot for{" "}
              <strong className="text-[#830036]">
                {formData.preferredDate || "tomorrow"} at{" "}
                {formData.preferredTime}
              </strong>
              . We've sent a calendar invite to{" "}
              <strong className="text-[#1f1a1b]">{formData.email}</strong>.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-gradient text-white text-xs uppercase tracking-wider font-semibold px-8 py-3 rounded-full cursor-pointer"
              >
                Back to 24MAGIC
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#830036] bg-[#a61d4c]/10 px-3 py-1 rounded-full">
                Discovery Call
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1f1a1b] mt-2">
                Book a 5-Minute Strategy Call
              </h3>
              <p className="text-xs sm:text-sm text-[#584145]">
                Let's discuss your financial workflows, ledger pain points, and
                growth goals with a dedicated bookkeeping specialist.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="consult-name"
                    className="block text-xs font-semibold text-[#1f1a1b] mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    id="consult-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfbfc3] text-sm focus:border-[#830036] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label
                    htmlFor="consult-email"
                    className="block text-xs font-semibold text-[#1f1a1b] mb-1"
                  >
                    Work Email *
                  </label>
                  <input
                    id="consult-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="sarah@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfbfc3] text-sm focus:border-[#830036] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="consult-company"
                    className="block text-xs font-semibold text-[#1f1a1b] mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    id="consult-company"
                    type="text"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    placeholder="Aura Studio LLC"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfbfc3] text-sm focus:border-[#830036] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label
                    htmlFor="consult-revenue"
                    className="block text-xs font-semibold text-[#1f1a1b] mb-1"
                  >
                    Est. Monthly Revenue
                  </label>
                  <select
                    id="consult-revenue"
                    value={formData.monthlyRevenue}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        monthlyRevenue: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfbfc3] text-sm focus:border-[#830036] focus:outline-hidden bg-white"
                  >
                    <option>&lt; $10k / mo</option>
                    <option>$10k - $50k / mo</option>
                    <option>$50k - $200k / mo</option>
                    <option>$200k+ / mo</option>
                  </select>
                </div>
              </div>

              <div>
                <p className="block text-xs font-semibold text-[#1f1a1b] mb-2">
                  Services Needed
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Bookkeeping",
                    "Financial Reporting",
                    "Tax Preparation",
                    "Payroll Management",
                  ].map((srv) => {
                    const selected = formData.servicesNeeded.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => handleServiceToggle(srv)}
                        className={`text-xs py-2 px-3 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between ${
                          selected
                            ? "bg-[#a61d4c]/10 border-[#830036] text-[#830036] font-semibold"
                            : "border-[#dfbfc3] text-[#584145] hover:bg-[#fbf1f2]"
                        }`}
                      >
                        <span>{srv}</span>
                        {selected && (
                          <span className="material-symbols-outlined text-sm">
                            check
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="consult-date"
                    className="block text-xs font-semibold text-[#1f1a1b] mb-1"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="consult-date"
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredDate: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfbfc3] text-sm focus:border-[#830036] focus:outline-hidden bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="consult-time"
                    className="block text-xs font-semibold text-[#1f1a1b] mb-1"
                  >
                    Preferred Time
                  </label>
                  <select
                    id="consult-time"
                    value={formData.preferredTime}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredTime: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfbfc3] text-sm focus:border-[#830036] focus:outline-hidden bg-white"
                  >
                    <option>09:00 AM EST</option>
                    <option>10:00 AM EST</option>
                    <option>01:00 PM EST</option>
                    <option>03:00 PM EST</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="consult-notes"
                  className="block text-xs font-semibold text-[#1f1a1b] mb-1"
                >
                  Additional Notes / Questions
                </label>
                <textarea
                  id="consult-notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Tell us about your accounting software or specific challenges..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfbfc3] text-sm focus:border-[#830036] focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-gradient text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-full shadow-md hover:shadow-xl cursor-pointer"
                >
                  Confirm Strategy Call
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
