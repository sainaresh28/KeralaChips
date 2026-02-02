import { Download, FileText, CheckSquare } from "lucide-react";
import { motion, type Variants } from "framer-motion";

/* ---------------- MOTION ---------------- */
const reveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Forms() {
  return (
    <>
      {/* FONT */}
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap");

          .saas { font-family: "Montserrat", system-ui, sans-serif; }
          .h1 { font-weight: 800; letter-spacing: -0.03em; line-height: 1.05; }
          .h2 { font-weight: 700; letter-spacing: -0.02em; }
          .body { font-weight: 500; line-height: 1.7; }
        `}
      </style>

      <section className="saas min-h-screen bg-transparent pt-24 sm:pt-32 pb-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

          {/* ================= HERO ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mb-28 max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-black/60 mb-4">
              Official documentation
            </p>

            <h1 className="h1 text-[44px] sm:text-[64px] text-black mb-6">
              Health forms,
              <br />designed to be completed
            </h1>

            <p className="body text-black/70">
              Access structured health forms and applications required for
              registration, claims, certificates, and official requests.
            </p>
          </motion.div>

          {/* ================= FORM CANVAS GRID ================= */}
          <section className="mb-32">
            <h2 className="h2 text-2xl text-black mb-12">
              Available applications
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                "Worker registration",
                "Health insurance application",
                "Medical reimbursement claim",
                "Health checkup request",
                "Vaccination certificate request",
                "Medical leave application",
                "Grievance / complaint",
                "Emergency contact update",
              ].map((title, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={reveal}
                  className="relative"
                >
                  {/* FORM CANVAS */}
                  <div
                    className="
                      relative rounded-2xl bg-[#FFF7D6]
                      border border-black/10
                      overflow-hidden
                      hover:-translate-y-[4px]
                      hover:shadow-xl
                      transition
                    "
                  >
                    {/* HEADER STRIP */}
                    <div className="px-5 py-4 bg-[#FFCC33] text-black flex items-center gap-3">
                      <FileText className="h-5 w-5" />
                      <h3 className="font-semibold text-sm uppercase tracking-wide">
                        {title}
                      </h3>
                    </div>

                    {/* BODY — FAKE FORM ROWS */}
                    <div className="px-5 py-6 space-y-3">
                      {Array.from({ length: 3 }).map((_, idx) => (
                        <div
                          key={idx}
                          className="
                            h-3 rounded bg-black/10
                            w-full
                          "
                        />
                      ))}
                      <div className="h-3 rounded bg-black/10 w-2/3" />
                    </div>

                    {/* FOOTER */}
                    <div className="px-5 py-4 border-t border-black/10 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-black/60 text-sm">
                        <CheckSquare className="h-4 w-4" />
                        Official form
                      </div>

                      <button className="inline-flex items-center text-sm font-semibold text-[#402EE6]">
                        Download
                        <Download className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* DEPTH SHADOW CANVAS */}
                  <div
                    className="
                      absolute inset-0 translate-x-3 translate-y-3
                      rounded-2xl bg-[#FFE08A]
                      border border-black/10
                      -z-10
                    "
                  />
                </motion.div>
              ))}
            </div>
          </section>

          {/* ================= FLOW CANVAS ================= */}
          <section className="rounded-3xl bg-black px-10 sm:px-16 py-20">
            <h2 className="h2 text-[28px] sm:text-[34px] text-white mb-14">
              Application flow
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                "Download the required form and fill it completely",
                "Attach all necessary documents as mentioned in the form",
                "Submit at nearest health center or upload through the portal",
                "Keep a copy of submitted forms for your records",
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={reveal}
                  className="relative bg-white/5 border border-white/15 rounded-2xl p-6"
                >
                  <div className="absolute -top-5 left-6 h-10 w-10 rounded-full bg-[#FFCC33] text-black flex items-center justify-center font-bold">
                    {i + 1}
                  </div>

                  <p className="body text-white/80 mt-6">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </section>
    </>
  );
}
