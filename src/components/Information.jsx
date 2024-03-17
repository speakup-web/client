import { tatacara } from "../data";

export function Information() {
    return (
        <section className="bg-babyBlue py-16 text-center" id="information">
            <h2 className="text-xl font-bold text-gray-900 mb-6 inter-bold">
                TATA CARA <span className="text-red-500">PENGADUAN</span>
            </h2>
            <p className="text-gray-600 inter-extra-light">Tata Cara Membuat Pengaduan Melalui SpeakUp!</p>
            <div className="flex flex-wrap justify-center py-10">
                {tatacara.map((cara) => (
                    <div key={cara.id} className="bg-white p-8 rounded-md shadow-md max-w-lg mx-4 my-6 flex text-start">
                        {/* ID Column */}
                        <div className="flex-shrink-0 mr-4 py-1">
                            <p className="text-white bg-customRed rounded-full w-8 h-8 flex items-center justify-center">{cara.id}</p>
                        </div>
                        {/* Content Column */}
                        <div className="flex-grow">
                            <div className="px-4">
                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-900 pb-2 nunito-bold red">{cara.title}</h3>
                                {/* Description */}
                                <p className="text-sm text-gray-800 nunito-light">{cara.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
