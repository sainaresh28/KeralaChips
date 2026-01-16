{/* ================= MOBILE SWIPE SLIDER (INFINITE) ================= */}
<div className="sm:hidden overflow-hidden">
  <motion.div
    className="flex"
    drag="x"
    animate={{ x: -index * 100 + "%" }}
    transition={{ duration: 0.35, ease: "easeInOut" }}
    onDragEnd={(_, info) => {
      if (info.offset.x < -80) next();
      if (info.offset.x > 80) prev();
    }}
  >
    {[...testimonials, testimonials[0]].map((t, i) => (
      <div
        key={i}
        className="min-w-full px-4 flex justify-center"
      >
        <motion.div
          animate={{
            scale: i === index ? 1 : 0.94,
            opacity: i === index ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
          className="relative bg-green-600 text-white rounded-3xl shadow-xl px-6 pt-20 pb-8 w-full max-w-sm"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gray-300 rounded-full border-4 border-white" />

          <Quote className="opacity-80 mb-4" size={24} />

          <p className="text-sm leading-relaxed mb-6 text-center">
            “{t.quote}”
          </p>

          <div className="border-t border-white/30 pt-4 text-sm font-semibold text-center">
            {t.name}
            <div className="text-xs opacity-80 mt-1">
              {t.role}
            </div>
          </div>
        </motion.div>
      </div>
    ))}
  </motion.div>
</div>
