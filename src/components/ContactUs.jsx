import { HiOutlineHome, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { speakup } from "../data";
import { contact } from "../data";

export function ContactUs() {
  return (
    <section className="bg-white py-16 text-center" id='contact-us'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Use grid layout and media query */}
        <div className="flex flex-col text-left max-w-md md:ml-auto px-4"> {/* Move the first column to the right on larger devices */}
          <h1 className="text-2xl font-bold mb-4 josefin-sans-bold primaryBlue">
            SpeakUp<span className="red">!</span>
          </h1>
          {speakup.map((speak, index) => (
            <p key={index} className="mb-4 nunito-light">
              {speak.desc}
            </p>
          ))}
        </div>

        <div className="flex flex-col text-start px-4"> {/* No need to adjust the second column */}
          <h2 className="text-xl font-semibold mb-3 inter-medium">Hubungi Kami</h2>
          <p className="mb-2 pb-2 nunito-light">
            Lebih lanjut jika Anda membutuhkan bantuan kami, hubungi kontak berikut :
          </p>
          {contact.map((contactus, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="flex items-center space-x-3">
                {contactus.type === 'kantor' && (
                  <HiOutlineHome className="h-5 w-5 mr-2 red" />
                )}
                {contactus.type === 'email' && (
                  <HiOutlineMail className="h-5 w-5 mr-2 red" />
                )}
                {contactus.type === 'telp' && (
                  <HiOutlinePhone className="h-5 w-5 mr-2 red" />
                )}
                <div className="space-y-2 py-1">
                  <p className="nunito-medium font-bold">{contactus.title}</p>
                  <p className="nunito-light">{contactus.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
