const GoogleMap = () => {
  return (
    <div className="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4380134584258!2d79.88715967806785!3d7.0751085982961675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f0c9463cb0d7%3A0xe3137fdcc17700c6!2sRealty%20Plaza!5e0!3m2!1sen!2slk!4v1744205117647!5m2!1sen!2slk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
