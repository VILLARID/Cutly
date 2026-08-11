import black_logo from "../../assets/Home/black_logo.png";

function InstagramIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

function FacebookIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function XIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
            <path d="M4 4l16 16M20 4L4 20" />
        </svg>
    );
}

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Barbers", href: "#barbers" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
];

const serviceLinks = [
    { label: "Haircuts", href: "#services" },
    { label: "Beard Services", href: "#services" },
    { label: "Shaves", href: "#services" },
    { label: "Grooming", href: "#services" },
];

const hours = [
    { day: "Mon – Fri", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "10:00 AM – 6:00 PM" },
];

const socials = [
    { label: "Instagram", icon: InstagramIcon, href: "#" },
    { label: "Facebook", icon: FacebookIcon, href: "#" },
    { label: "X", icon: XIcon, href: "#" },
];

function Footer() {
    return (
        <footer className="border-t border-black/[0.06] bg-[#F5F2EC]">
            <div className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {/* BRAND */}
                    <div>
                        <a href="#home" className="inline-flex items-center gap-2.5">
                            <img
                                src={black_logo}
                                alt="Cutly Logo"
                                className="h-9 w-9 object-contain"
                            />
                            <span className="leading-tight">
                                <span className="block font-serif text-xl font-semibold text-[#171717]">
                                    Cutly
                                </span>
                                <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                                    Premium Barber Studio
                                </span>
                            </span>
                        </a>

                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-600">
                            Modern cuts. Timeless style.
                        </p>

                        <div className="mt-6 flex gap-3">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="flex size-10 items-center justify-center rounded-[10px] border border-black/10 bg-white text-[#171717] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E39100]/40 hover:text-[#C97B00]"
                                    >
                                        <Icon className="size-[18px]" aria-hidden="true" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <nav aria-label="Footer quick links">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#171717]">
                            Quick Links
                        </h3>
                        <ul className="mt-5 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-neutral-600 transition-colors duration-200 hover:text-[#C97B00]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* SERVICES */}
                    <nav aria-label="Footer services">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#171717]">
                            Services
                        </h3>
                        <ul className="mt-5 space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-neutral-600 transition-colors duration-200 hover:text-[#C97B00]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* HOURS */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#171717]">
                            Hours
                        </h3>
                        <ul className="mt-5 space-y-3">
                            {hours.map((slot) => (
                                <li key={slot.day} className="flex flex-col gap-0.5">
                                    <span className="text-sm font-medium text-[#171717]">
                                        {slot.day}
                                    </span>
                                    <span className="text-sm text-neutral-600">
                                        {slot.time}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-12 flex flex-col gap-3 border-t border-black/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-neutral-500">
                        © 2026 Cutly Premium Barber Studio. All rights reserved.
                    </p>
                    <p className="text-sm text-neutral-500">
                        Precision cuts. Premium grooming.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;