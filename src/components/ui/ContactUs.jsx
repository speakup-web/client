import PropTypes from 'prop-types';
import { HiOutlineHome, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { speakup } from "../../data";
import { contact } from "../../data";

ContactUs.propTypes = {
  bgColor: PropTypes.string,
};

export function ContactUs(props) {
  return (
    <section className={`py-16 text-center ${props.bgColor}`} id="contact-us">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col text-left max-w-md md:ml-auto px-4">
          <h1 className="text-2xl font-bold mb-4 primaryBlue">
            SpeakUp<span className="text-red-500">!</span>
          </h1>
          {speakup.map((speak, index) => (
            <p key={index} className="mb-4 text-gray-700">
              {speak.desc}
            </p>
          ))}
        </div>

        <div className="flex flex-col text-start px-4">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Hubungi Kami</h2>
          <p className="mb-2 pb-2 text-gray-700">
            Lebih lanjut jika Anda membutuhkan bantuan kami, hubungi kontak berikut:
          </p>
          {contact.map((contactus, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="flex items-center space-x-3">
                {contactus.type === 'kantor' && (
                  <HiOutlineHome className="h-5 w-5 mr-2 text-red-500" />
                )}
                {contactus.type === 'email' && (
                  <HiOutlineMail className="h-5 w-5 mr-2 text-red-500" />
                )}
                {contactus.type === 'telp' && (
                  <HiOutlinePhone className="h-5 w-5 mr-2 text-red-500" />
                )}
                <div className="space-y-2 py-1">
                  <p className="text-gray-900 font-semibold">{contactus.title}</p>
                  <p className="text-gray-700">{contactus.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}