import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactItem, ContactProps } from "@/app/interfaces";


const ContactInfo: React.FC<ContactProps> = ({ data }) => {
  const {
    type,
    title,
    highlightWord,
    description,
    imageSrc,
    imageAlt,
    contactInfo,
  } = data;

  const titleParts = title.split(highlightWord);

  const getContactItems = (): ContactItem[] => {
    if (type === "reach-out") {
      return [
        { icon: MapPin, label: "Address", value: contactInfo.address },
        { icon: Phone, label: "Phone", value: contactInfo.phone },
        { icon: Mail, label: "Email Address", value: contactInfo.email },
        { icon: Clock, label: "Opening Hours", value: contactInfo.hours },
      ].filter((item) => item.value) as ContactItem[];
    }

    return [
      {
        icon: Phone,
        label: "Customer Complaint No",
        value: contactInfo.complaintNo,
      },
      {
        icon: MapPin,
        label: "Customer Ombudsman",
        value: contactInfo.ombudsman,
      },
    ].filter((item) => item.value) as ContactItem[];
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          {titleParts[0]}
          <span className="text-red-500">{highlightWord}</span>
          {titleParts[1]}
        </h2>

        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          {description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 flex lg:justify-start justify-center">
            <div className="space-y-6">
              {getContactItems().map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-red-500 p-3 rounded-full">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.label}</h3>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
