import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitMessage } from "../hooks/useQueries";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const { mutate, isPending } = useSubmitMessage();

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    mutate(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        timestamp: BigInt(Date.now()) * BigInt(1_000_000),
      },
      {
        onSuccess: () => {
          toast.success("Message sent successfully! We'll be in touch soon.");
          setForm({ name: "", email: "", phone: "", message: "" });
          setSubmitted(true);
        },
        onError: () => {
          toast.error("Failed to send message. Please try again.");
        },
      },
    );
  };

  return (
    <main className="pt-28 pb-24 min-h-screen bg-background">
      {/* Hero */}
      <section className="relative">
        <div
          className="h-64 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=400&fit=crop&auto=format')`,
          }}
        >
          <div className="absolute inset-0 bg-black/75 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <p className="text-gold text-xs tracking-widest mb-3">
                REACH OUT
              </p>
              <h1 className="font-display text-white text-4xl md:text-5xl font-medium">
                CONTACT US
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold text-xs tracking-widest mb-3">
              SEND A MESSAGE
            </p>
            <h2 className="font-display text-foreground text-3xl font-medium mb-8">
              Let's Talk
            </h2>

            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-64 gap-4"
                data-ocid="contact.success_state"
              >
                <CheckCircle size={48} className="text-gold" />
                <p className="text-foreground text-lg font-display">
                  Thank you for reaching out!
                </p>
                <p className="text-muted-foreground text-sm text-center">
                  We've received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
                data-ocid="contact.modal"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="name"
                      className="text-xs tracking-wider text-muted-foreground"
                    >
                      NAME *
                    </Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Your full name"
                      className="bg-[oklch(0.14_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold rounded-none"
                      data-ocid="contact.input"
                    />
                    {errors.name && (
                      <p
                        className="text-xs text-red-400"
                        data-ocid="contact.name_error"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="email"
                      className="text-xs tracking-wider text-muted-foreground"
                    >
                      EMAIL *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder="your@email.com"
                      className="bg-[oklch(0.14_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold rounded-none"
                      data-ocid="contact.input"
                    />
                    {errors.email && (
                      <p
                        className="text-xs text-red-400"
                        data-ocid="contact.email_error"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="phone"
                    className="text-xs tracking-wider text-muted-foreground"
                  >
                    PHONE
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-[oklch(0.14_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold rounded-none"
                    data-ocid="contact.input"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="message"
                    className="text-xs tracking-wider text-muted-foreground"
                  >
                    MESSAGE *
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Tell us about your project..."
                    className="bg-[oklch(0.14_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold rounded-none resize-none"
                    data-ocid="contact.textarea"
                  />
                  {errors.message && (
                    <p
                      className="text-xs text-red-400"
                      data-ocid="contact.field_error"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="self-start bg-gold text-[oklch(0.09_0_0)] hover:bg-[oklch(0.65_0.10_83)] rounded-none px-10 py-6 text-xs tracking-widest font-medium"
                  data-ocid="contact.submit_button"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      SENDING...
                    </>
                  ) : (
                    "SUBMIT"
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold text-xs tracking-widest mb-3">FIND US</p>
            <h2 className="font-display text-foreground text-3xl font-medium mb-8">
              Get In Touch
            </h2>

            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="text-gold mt-1 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium mb-1">
                    Office Address
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    1911-D/19, 3rd Floor, Govindpuri Extn,
                    <br />
                    Kalkaji, New Delhi - 110019
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-gold mt-1 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+919891266641"
                    className="text-muted-foreground text-sm hover:text-gold transition-colors"
                  >
                    +91 9891266641
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-gold mt-1 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@designradiance.in"
                    className="text-muted-foreground text-sm hover:text-gold transition-colors"
                  >
                    info@designradiance.in
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-gold mt-1 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium mb-1">
                    Office Hours
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Monday – Saturday: 10:00 AM – 7:00 PM
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 h-48 bg-[oklch(0.14_0_0)] border border-border flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-gold mx-auto mb-2" />
                <p className="text-muted-foreground text-xs tracking-wider">
                  NEW DELHI, INDIA
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
