import TitleAbout from './../assets/images/About.png';
import TextAbout from './../assets/images/Text about.png';

export function About() {
  return (
    <section className="bg-white py-16 text-center" id="about">
      <div className="container mx-auto px-16 h-96 flex justify-center items-center">
        <div className="flex flex-wrap -mx-4">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 flex items-center justify-center">
              <img
                src={TitleAbout}
                alt="Title About"
                className="md:mr-4 w-full md:w-auto max-w-52"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 flex items-center justify-center">
              <img src={TextAbout} alt="Text About" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
