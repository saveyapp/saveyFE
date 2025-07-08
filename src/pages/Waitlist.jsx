import axios from "axios";
import { toast } from "react-toastify";
import waitlist from "../assets/waitlist.png";
import { useState } from "react";
import Modal from "../components/Modal";
const Waitlist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstname, lastname, email } = formData;
    const fullname = `${firstname} ${lastname}`;
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/waitlist/join`,
        { fullname, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsOpen(true);
      setFormData({ firstname: "", lastname: "", email: "" });
    } catch (err) {
      const message =
        err.response?.data?.message || "Failed to add to waitlist";
      toast.error(message);
      console.log(err);
    } finally {
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
      });
    }
  };
  return (
    <>
      <section className="py-12 text-[#231f20]">
        <div className="container">
          <div className="grid lg:grid-cols-[45%_55%] items-start gap-16 lg:gap-7 mt-12">
            <div>
              <h1 className="whitespace-nowrap text-[3rem] leading-[50px] lg:text-[4rem] lg:leading-[64px] font-bold ">
                Revolutionize <br /> your {""}
                <span className="text-[#52AA2A]">finances</span>
              </h1>
              <p className="pb-3 text-xl sm:text-2xl text-center sm:text-left">
                Chat, Split and Pay bills seamlessly{" "}
                <br className="hidden sm:block" /> with Savey
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
                <div className="flex flex-col sm:flex-row gap-2 lg:items-center">
                  <input
                    className="bg-[#E7E7E7] w-full border rounded-md p-3 outline-none text-[#222] mb-3"
                    type="text"
                    placeholder="Firstname"
                    required
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  <input
                    className="bg-[#E7E7E7] w-full text-base border rounded-md p-3 outline-none text-[#222] mb-3"
                    type="text"
                    placeholder="Lastname"
                    required
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
                  <input
                    className="bg-[#E7E7E7] w-full text-base border rounded-md p-3 outline-none text-[#222] lg:w-[400px]"
                    type="text"
                    placeholder="mail@johndoe.com"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-1/2 lg:w-auto bg-[#52AA2A] text-white text-xl  rounded-md px-4 py-3 hover:bg-[#ADD565] ease-in duration-200 whitespace-nowrap"
                  >
                    <span>Join Waitlist</span>
                  </button>
                </div>
              </form>
            </div>
            <div>
              <img src={waitlist} alt="networking" />
            </div>
          </div>
        </div>
      </section>
      {isOpen && <Modal />}
    </>
  );
};

export default Waitlist;
