import React from 'react';
import features from './Features';
import Navbar from "./Navbar";
// import Basebar from "./Basebar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
    <Navbar userRole={role} />
    <div className="bg-blue-100 shadow-xl rounded-md">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <img src='https://cdni.iconscout.com/illustration/premium/thumb/book-online-medical-appointment-1946927-1651972.png' alt="illustration" className="w-full  lg:w-1/2" />
          <div className="mt-8  lg:mt-0 grid grid-cols-1 lg:flex-shrink-0">
            <h2 className="md:text-3xl font-extrabold tracking-tight text-gray-900 text-2xl">
              DoctorsHood - One App For All
            </h2>
            <a href="/user/virtual-doctor" className="justify-center text-center px-4 py-2 mt-3 border border-transparent text-xl  font-medium rounded-md text-white bg-teal-500 hover:bg-teal-800">
              Meet Our Virtual Doctor
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-teal-500">Featured</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {features.map((features) => (
          <div className="shadow-xl m-10 bg-white rounded-lg">
            <div className="bg-gray-50">
              <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-4 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-2xl md:w-96">
                  <span className="block">{features.name}</span>
                  <span className="block text-teal-500">{features.des}</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                  <div className="inline-flex rounded-md">
                    <a href={features.link} className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-lg font-medium rounded-md text-white bg-teal-500 hover:bg-teal-800">
                      {features.btn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> 

      <div className="text-center mt-5">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-teal-500">Consult Specialists</h2>
      </div>
      <div className="bg-indigo-100 shadow-xl m-10">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:py-2 lg:px-8 lg:flex lg:items-center lg:justify-between rounded-lg">
          <img  src='https://cdni.iconscout.com/illustration/premium/thumb/doctor-giving-advice-to-patient-2527798-2117453.png' alt="illustration" className="h-80" />
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md">
              <div className="space-y-4">
                <div className="w-100">
                  <div className="grid grid-cols-2 gap-2">
                    <a href="/user/select-doctor/Allergist" className="md:mx-5 lg:btn sm:text-2xl text-teal-500 border-2 border-teal-500 hover:border-teal-800 rounded-lg">
                      Allergist
                    </a>
                    <a href="/user/select-doctor/Cardiologist" className="md:mx-5 lg:btn sm:text-2xl text-teal-500 border-2 border-teal-500 hover:border-teal-800 rounded-lg">
                      Cardiologist
                    </a>
                  </div>
                </div>
                <div className="w-100">
                  <div className="grid grid-cols-2 gap-2">
                    <a href="/user/select-doctor/Endocrinologist" className="md:mx-5 lg:btn sm:text-2xl text-teal-500 border-2 border-teal-500 hover:border-teal-800 rounded-lg">
                      Endocrinologist
                    </a>
                    <a href="/user/select-doctor/Neurologist" className="md:mx-5 lg:btn sm:text-2xl text-teal-500 border-2 border-teal-500 hover:border-teal-800 rounded-lg">
                      Neurologist
                    </a>
                  </div>
                </div>
                <div className="w-100">
                  <div className="grid grid-cols-2 gap-2">
                    <a href="/user/select-doctor/Ophthalmologist" className="md:mx-5 lg:btn sm:text-2xl text-teal-500 border-2 border-teal-500 hover:border-teal-800 rounded-lg">
                      Ophthalmologist
                    </a>
                    <a href="/user/select-specialisation" className="md:mx-5 lg:btn sm:text-2xl text-teal-500 border-2 border-teal-500 hover:border-teal-800 rounded-lg">
                      More...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="text-center mt-5">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-teal-500">Choose Symptoms</h2>
      </div>
      <div className="bg-indigo-100 shadow-xl m-10">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:py-2 lg:px-8 lg:flex lg:items-center lg:justify-between rounded-lg">
          <div className="space-y-4">
            <div className="w-100">
              <div className="grid grid-cols-2 gap-2">
                <a href="/user/select-doctor/Back Pain" className="md:mx-5 lg:btn sm:text-2xl text-teal-500 border-2 border-teal-500 hover:border-teal-800 rounded-lg">
                  Back Pain
                </a>
                <a href="/user/select-doctor/Fatigue" className="md:mx-5 lg:btn sm:text-2xl text-teal-500 border-2 border-teal-500 hover:border-teal-800 rounded-lg">
                  Fatigue
                </a>
              </div>
            </div>
            <div className="w-100">
              <div className="grid grid-cols-2 gap-2">
                <a href="/user/select-doctor/Cough" className="md:mx-5 lg:btn sm:text-2xl text-teal-500 border-2 border-teal-500 hover:border-teal-800 rounded-lg">
                  Cough
                </a>
                <a href="/user/select-doctor/Constipation" className="md:mx-5 lg:btn sm:text-2xl text-teal-500 border-2 border-teal-500 hover:border-teal-800 rounded-lg">
                  Constipation
                </a>
              </div>
            </div>
            <div className="w-100">
              <div className="grid grid-cols-2 gap-2">
                <a href="/user/select-doctor/Itching" className="md:mx-5 lg:btn sm:text-2xl text-teal-500 border-2 border-teal-500 hover:border-teal-800 rounded-lg">
                  Itching
                </a>
                <a href="/user/select-symptom" className="md:mx-5 lg:btn sm:text-2xl text-teal-500 border-2 border-teal-500 hover:border-teal-800 rounded-lg">
                  More...
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md">
              <img src='https://freewebillustrations.com/static/images/preview/illustrations-gallery-coughing.png' alt="illustration" className="  h-80" />
            </div>
          </div>
        </div>
      </div>
    {/* <Basebar /> */}
    <Footer />
    </div>
    );
};

export default Home;