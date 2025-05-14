const GradientComponent = () => {
  return (
    <svg width="0" height="0">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#D40006", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#430E10", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientComponent;
