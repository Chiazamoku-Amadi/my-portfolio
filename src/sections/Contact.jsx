import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    message: Yup.string().required("Please enter your message"),
  });

  const handleSubmit = async (_, { resetForm }) => {
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_yix3nqj",
        "template_vct19tf",
        formRef.current,
        "7MwUMdyjhpgkV52Ht"
      );

      toast.success("Message sent successfully!", {
        icon: "✅",
      });

      resetForm();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!", {
        icon: "❗️",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="c-space my-20">
      <div className="relative min-h-[900px] md:min-h-[1000px] flex flex-col justify-center items-center">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute top-0 min-h-[900px] md:min-h-[1000px] w-full"
        />

        <div className="contact-container">
          <h3 className="head-text">Let&apos;s Talk</h3>
          <p className="text-base sm:text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isValid, dirty }) => (
              <Form
                ref={formRef}
                action="submit"
                className="flex flex-col space-y-7 mt-12"
              >
                <div className="space-y-3">
                  <span className="field-label">Full Name</span>

                  <div>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className={`field-input ${
                        errors.fullName && touched.fullName
                          ? "border-red-600"
                          : "border-white"
                      }`}
                      placeholder="Jane Doe"
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-red-600 text-xs mt-1"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="field-label">Email</span>

                  <div>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`field-input ${
                        errors.fullName && touched.fullName
                          ? "border-red-600"
                          : "border-white"
                      }`}
                      placeholder="janedoe@gmail.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-600 text-xs mt-1"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="field-label">Your Message</span>

                  <div>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows={5}
                      className={`field-input ${
                        errors.message && touched.message
                          ? "border-red-600"
                          : "border-white"
                      }`}
                      placeholder="Message"
                    />
                    <ErrorMessage
                      name="message"
                      component="p"
                      className="text-red-600 text-xs"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!isValid || !dirty}
                  className={`field-btn ${
                    !isValid || !dirty ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}

                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow-up"
                    className="field-btn_arrow"
                  />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <Toaster
        toastOptions={{
          style: {
            fontFamily: "Arapey, sans-serif",
            fontSize: "16px",
          },
        }}
      />
    </section>
  );
};

export default Contact;
