'use client';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";


const ContactForm = ({sendEmail}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("subject", data.subject);
      formData.append("message", data.message);

      await sendEmail(formData);
      reset();
      toast.success('Thank you for reaching out')
    } catch (error) {
      toast.error("Could not send your message")
      reset();
    }
  };

  return (
    <div>
        <Toaster richColors position="bottom-right"/>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border-1 border-black  rounded"
            {...register("name", { required: "Your name is required" })}
          />
        </div>
        {errors.name && (
          <p className="text-red-500 mb-2">{errors.name.message}</p>
        )}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Email"
            className="w-full p-2 border-1 border-black rounded"
            {...register("email", {
              required: "Email is required",
              validate: (value) =>
                value.includes("@") || "Invalid email address",
            })}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 mb-2">{errors.email.message}</p>
        )}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 border-1 border-black rounded"
            {...register("subject", { required: "Subject is required" })}
          />
        </div>
        {errors.subject && (
          <p className="text-red-500 mb-2">{errors.subject.message}</p>
        )}
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            className="w-full h-full p-2 border-1 border-black  rounded"
            rows="5"
            {...register("message", { required: "Message is required" })}
          ></textarea>
        </div>
        {errors.message && (
          <p className="text-red-500 mb-2">{errors.message.message}</p>
        )}
        <Button
          disabled={isSubmitting}
          className=" bg-blue-950 text-white hover:bg-blue-700 transition-colors w-full"
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
