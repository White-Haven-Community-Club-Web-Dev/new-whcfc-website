export default function ContactPage() {
    return (
      <div className="container min-w-full mx-auto flex-grow">
        <div className="px-12 md:px-48 py-20 bg-black text-white">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-10">
            <div>
              <h1 className="font-bold text-6xl text-center">Contact Us</h1>
               <p className="mt-3 text-center">
                If you have any further questions for the White Haven Community
                Football Club, please submit the following form and our team will
                reach out to you with an answer.
               </p>
              <p className="mt-3 text-center">
                If you have any further questions for the White Haven Community Football Club, 
                please email <a href="mailto:fcwhitehaven&#64;gmail.com">fcwhitehaven&#64;gmail.com</a> with your name, phone number and brief messsage 
                or call (416) 558-1330 and our team will reach out to you with an answer.
              </p>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2343/2343697.png"
              alt="contact-icon"
              className="w-60 md:w-80 mx-auto bg-white rounded-3xl p-4"
            />
          </div>
        </div>
        {/* Replace with actual components or remove if not implemented */}
        {/* <ContactForm /> */}
        {/* <ContactMap /> */}
      </div>
    );
  }