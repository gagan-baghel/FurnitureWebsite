"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

export default function ContactPageClient() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        toast.success("Message sent successfully! We'll be in touch soon.")
    }
    return (
        <main className="pt-28 bg-cream">
            {/* Hero Section */}
            <section className="py-12 md:py-20 bg-cream rounded-bl-[80px]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
                            <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                            Contact Us
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-light text-rich-brown mb-6">
                            Get in <span className="italic">Touch</span>
                        </h1>
                        <div className="w-20 h-1 bg-velvet-green mx-auto mb-8"></div>
                        <p className="text-lg text-rich-brown/80 mb-8">
                            We'd love to hear about your project. Reach out to us to schedule a consultation or learn more about our
                            services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form and Info */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
                                <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                                Send a Message
                            </div>
                            <h2 className="text-2xl font-serif font-light text-rich-brown mb-6">
                                Send us a <span className="italic">Message</span>
                            </h2>
                            <div className="w-20 h-1 bg-velvet-green mb-8"></div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="first-name" className="text-sm font-medium text-rich-brown">
                                            First Name
                                        </label>
                                        <Input
                                            id="first-name"
                                            name="firstName"
                                            autoComplete="given-name"
                                            required
                                            placeholder="Enter your first name"
                                            className="border-rich-brown/20 focus-visible:ring-velvet-green rounded-full"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last-name" className="text-sm font-medium text-rich-brown">
                                            Last Name
                                        </label>
                                        <Input
                                            id="last-name"
                                            name="lastName"
                                            autoComplete="family-name"
                                            required
                                            placeholder="Enter your last name"
                                            className="border-rich-brown/20 focus-visible:ring-velvet-green rounded-full"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-rich-brown">
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        placeholder="Enter your email address"
                                        className="border-rich-brown/20 focus-visible:ring-velvet-green rounded-full"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-rich-brown">
                                        Phone
                                    </label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        autoComplete="tel"
                                        placeholder="Enter your phone number"
                                        className="border-rich-brown/20 focus-visible:ring-velvet-green rounded-full"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-medium text-rich-brown">
                                        Service Interested In
                                    </label>
                                    <Select>
                                        <SelectTrigger className="border-rich-brown/20 focus:ring-velvet-green rounded-full">
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-[20px]">
                                            <SelectItem value="residential">Residential Interior Design</SelectItem>
                                            <SelectItem value="commercial">Commercial Interior Design</SelectItem>
                                            <SelectItem value="consultation">Design Consultation</SelectItem>
                                            <SelectItem value="renovation">Renovation</SelectItem>
                                            <SelectItem value="vastu">Vastu Consultation</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-rich-brown">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        placeholder="Tell us about your project"
                                        className="min-h-[150px] border-rich-brown/20 focus-visible:ring-velvet-green rounded-[20px]"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-velvet-green hover:bg-velvet-green/90 text-white rounded-full"
                                >
                                    <Send className="mr-2 h-4 w-4" />
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
                                <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                                Our Details
                            </div>
                            <h2 className="text-2xl font-serif font-light text-rich-brown mb-6">
                                Contact <span className="italic">Information</span>
                            </h2>
                            <div className="w-20 h-1 bg-velvet-green mb-8"></div>

                            <div className="space-y-8 mb-12">
                                <div className="flex items-start gap-4 bg-cream p-6 rounded-[40px]">
                                    <Phone className="h-6 w-6 text-velvet-green mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-medium text-rich-brown mb-1">Phone</h3>
                                        <p className="text-rich-brown/80">
                                            <a href="tel:+919876543210" className="hover:text-velvet-green transition-colors">+91 98765 43210</a>
                                        </p>
                                        <p className="text-rich-brown/80">
                                            <a href="tel:+919876543211" className="hover:text-velvet-green transition-colors">+91 98765 43211</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-cream p-6 rounded-[40px]">
                                    <Mail className="h-6 w-6 text-velvet-green mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-medium text-rich-brown mb-1">Email</h3>
                                        <p className="text-rich-brown/80">
                                            <a href="mailto:hello@priyainteriors.com" className="hover:text-velvet-green transition-colors">hello@priyainteriors.com</a>
                                        </p>
                                        <p className="text-rich-brown/80">
                                            <a href="mailto:info@priyainteriors.com" className="hover:text-velvet-green transition-colors">info@priyainteriors.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-cream p-6 rounded-[40px]">
                                    <MapPin className="h-6 w-6 text-velvet-green mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-medium text-rich-brown mb-1">Studio Address</h3>
                                        <p className="text-rich-brown/80">
                                            42 Harmony Lane, Jubilee Hills,
                                            <br />
                                            Hyderabad 500033, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="font-medium text-rich-brown mb-4">Studio Hours</h3>
                            <div className="space-y-2 mb-8 bg-white p-6 rounded-[40px]">
                                <div className="flex justify-between">
                                    <span className="text-rich-brown/80">Monday – Friday</span>
                                    <span className="text-rich-brown font-medium">10:00 AM – 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-rich-brown/80">Saturday</span>
                                    <span className="text-rich-brown font-medium">11:00 AM – 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-rich-brown/80">Sunday</span>
                                    <span className="text-rich-brown font-medium">Closed</span>
                                </div>
                            </div>

                            <div className="relative h-[300px] w-full rounded-[40px] overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600&h=300"
                                    alt="Map showing Priya Sharma Interior Design Studio location in Jubilee Hills, Hyderabad"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Button asChild className="bg-white text-rich-brown hover:bg-white/90 rounded-full">
                                        <Link href="https://maps.google.com/?q=42+Harmony+Lane+Jubilee+Hills+Hyderabad" target="_blank" rel="noopener noreferrer">
                                            View on Google Maps
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-24 bg-cream rounded-tr-[80px]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
                                <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                                FAQ
                            </div>
                            <h2 className="text-3xl font-serif font-light text-rich-brown mb-6">
                                Common <span className="italic">Questions</span>
                            </h2>
                            <div className="w-20 h-1 bg-velvet-green mx-auto"></div>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    question: "What happens after I submit the contact form?",
                                    answer:
                                        "Once you submit the form, our team will review your inquiry and get back to you within 24-48 hours to schedule an initial consultation or answer any questions you may have.",
                                },
                                {
                                    question: "Do you offer virtual consultations?",
                                    answer:
                                        "Yes, we offer virtual consultations for clients who are unable to visit our studio in person. These sessions are conducted via video call and are just as comprehensive as our in-person consultations.",
                                },
                                {
                                    question: "Is there a fee for the initial consultation?",
                                    answer:
                                        "Yes, we charge a consultation fee which is later adjusted against your project cost if you decide to proceed with our services. This ensures that we can provide you with valuable insights and dedicated attention from the start.",
                                },
                                {
                                    question: "Do you work on projects outside of Hyderabad?",
                                    answer:
                                        "While our studio is based in Hyderabad, we work on projects across India and internationally. For distant projects, we may adjust our process to include more virtual meetings and periodic site visits.",
                                },
                            ].map((faq, index) => (
                                <div key={index} className="border-b border-velvet-green/20 pb-6">
                                    <h3 className="text-lg font-medium text-rich-brown mb-3">{faq.question}</h3>
                                    <p className="text-rich-brown/80">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-matte-black text-white rounded-tl-[80px]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
                            <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                            Let's Connect
                        </div>
                        <h2 className="text-3xl font-serif font-light mb-6">
                            Let's Create Something <span className="italic">Beautiful</span>
                        </h2>
                        <p className="text-lg text-white/80 mb-8">
                            Whether you're ready to start your project or just exploring possibilities, we're here to help you bring
                            your vision to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                className="bg-velvet-green hover:bg-velvet-green/90 text-white rounded-full px-8 py-6 h-auto min-h-[44px]"
                            >
                                <Link href="tel:+919876543210">
                                    <Phone className="mr-2 h-4 w-4" />
                                    Call Now
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="bg-transparent text-white border-white hover:bg-white/10 rounded-full px-8 py-6 h-auto min-h-[44px]"
                            >
                                <Link href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                                    WhatsApp Us
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
