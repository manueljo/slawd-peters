'use client'

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.7378142382372!2d7.851907258085891!3d4.8527078309803615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1067fd39642d14a3%3A0x7a08a78660c32885!2sSLAWD%20PETERS%20Engineering%20Limited!5e1!3m2!1sen!2sng!4v1755785116306!5m2!1sen!2sng"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      onLoad={console.log('loaded')}
    ></iframe>
  );
};

export default Map;
