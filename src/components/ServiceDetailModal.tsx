import Image from "next/image";
import { useRouter } from "next/navigation";
import type React from "react";
import type { ServiceItem } from "../types";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
}) => {
  const router = useRouter();
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#dfbfc3]/40 relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#584145] hover:text-[#830036] p-1.5 rounded-full hover:bg-[#fbf1f2] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="space-y-6 text-left">
          <div className="h-48 w-full rounded-2xl overflow-hidden relative bg-[#fbf1f2]">
            <Image
              src={service.imageUrl}
              alt={service.alt}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover mix-blend-multiply"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-[#830036]">
              {service.pricingEstimate}
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#875200] bg-[#ffb55b]/20 px-3 py-1 rounded-full">
              Precision Core Service
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1f1a1b] mt-2 mb-3">
              {service.title}
            </h3>
            <p className="text-sm text-[#584145] leading-relaxed mb-4">
              {service.fullDesc}
            </p>
          </div>

          <div className="space-y-3 bg-[#fbf1f2]/60 p-5 rounded-2xl border border-[#dfbfc3]/30">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1f1a1b]">
              Key Service Features &amp; Deliverables:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-2 text-xs text-[#1f1a1b]"
                >
                  <span className="material-symbols-outlined text-sm text-[#830036]">
                    check_circle
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                router.push("/contact");
              }}
              className="flex-1 btn-gradient text-white text-xs uppercase tracking-wider font-semibold py-3.5 rounded-full shadow-md hover:shadow-xl cursor-pointer"
            >
              Book Consultation for {service.title}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3.5 border border-[#dfbfc3] text-xs uppercase tracking-wider font-semibold text-[#584145] rounded-full hover:bg-[#fbf1f2] cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
