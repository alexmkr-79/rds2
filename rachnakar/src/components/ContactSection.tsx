import { contactInfo } from "@/data/contact";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    const message = `Hello Rachnakar Design Studio,

I would like to get in touch.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}`;

    const phone = "919284400646";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="w-full bg-[#F5F0E8] rounded-t-[20px] pt-24 pb-32 px-6 md:px-12 -mt-4 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-display text-[#56423A] text-6xl md:text-8xl lg:text-[120px] leading-none mb-16 md:mb-24 border-b border-[#56423A]/20 pb-8 uppercase">
          GET IN TOUCH
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-8 text-[#56423A]">
              Contact Information
            </h3>
            <div className="space-y-8 font-sans text-[#56423A]/80">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8C6A5B] font-bold mb-2">Address</p>
                <p className="text-lg">{contactInfo.address}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8C6A5B] font-bold mb-2">Email</p>
                <p className="text-lg">
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-[#8C6A5B] transition-colors">
                    {contactInfo.email}
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8C6A5B] font-bold mb-2">Phone</p>
                <p className="text-lg">
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-[#8C6A5B] transition-colors">
                    {contactInfo.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[20px] shadow-sm">
            <h3 className="font-serif text-2xl font-bold mb-8 text-[#56423A]">
              Send a Message
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-xs uppercase tracking-[0.1em] text-[#56423A]/70">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-transparent rounded-none border-0 border-b border-[#56423A]/20 focus-visible:ring-0 focus-visible:border-[#8C6A5B] px-0 py-2 h-auto text-base" />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans text-xs uppercase tracking-[0.1em] text-[#56423A]/70">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" type="email" {...field} className="bg-transparent rounded-none border-0 border-b border-[#56423A]/20 focus-visible:ring-0 focus-visible:border-[#8C6A5B] px-0 py-2 h-auto text-base" />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans text-xs uppercase tracking-[0.1em] text-[#56423A]/70">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 00000 00000" type="tel" {...field} className="bg-transparent rounded-none border-0 border-b border-[#56423A]/20 focus-visible:ring-0 focus-visible:border-[#8C6A5B] px-0 py-2 h-auto text-base" />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-xs uppercase tracking-[0.1em] text-[#56423A]/70">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project..." className="min-h-[120px] bg-transparent rounded-none border-0 border-b border-[#56423A]/20 focus-visible:ring-0 focus-visible:border-[#8C6A5B] px-0 py-2 text-base resize-none" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="w-full py-4 mt-4 bg-[#56423A] text-[#F5F0E8] font-sans text-sm font-medium uppercase tracking-[0.2em] rounded-full hover:bg-[#8C6A5B] transition-colors duration-300"
                  data-testid="button-submit-contact"
                >
                  Send via WhatsApp ↗
                </button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
