import { IoIosCheckbox } from "react-icons/io";

const Waitlist = () => {
  return (
    <section className="bg-[#fffaf0] md:px-28 px-5 py-7">
      <div className="flex justify-center items-center gap-1 text-[#222] text-2xl font-bold">
        <IoIosCheckbox size={30} className="text-green-600 opacity-[0.6]" />
        Savey
      </div>
      <h1 className="text-center text-3xl font-bold text-[#222] py-3">
        Smarter Budgeting <br /> Starts Here
      </h1>
      <p className="text-center">
        Savey helps you plan better, track your goals, and
        <br className="hidden sm:block" /> spend wisely - whether you're a
        student, professional <br className="hidden sm:block" /> or business
        owner
      </p>
      <div className="flex justify-center">
        <form className="bg-white px-8 py-6 my-6 flex flex-col rounded-xl w-[317px] md:w-[430px]">
          <h2 className=" text-lg font-semibold text-center text-[#222]">
            Join the Waitlist
          </h2>
          <p className="text-base text-center text-[#353535] opacity-[0.6] py-3">
            Be the first to access Savey and <br /> start saving smarter
          </p>
          <input
            type="text"
            className="text-base border rounded-md p-3 outline-none text-[#222] mb-3"
            placeholder="Full Name"
            name="fullname"
            required
          />
          <input
            className="text-base border rounded-md p-3 outline-none text-[#222] mb-3"
            type="text"
            placeholder="Email Address"
            required
            name="email"
          />
          <input
            type="number"
            placeholder="Phone Number (optional)"
            required
            className="text-base border rounded-md p-3 outline-none text-[#222] mb-3"
          />
          <button
            type="submit"
            className="bg-[#ff6347] text-white text-base font-semibold rounded-md py-3"
          >
            Join Waitlist
          </button>
        </form>
      </div>
      {/* Testing waitlist */}
    </section>
  );
};

export default Waitlist;
