import type { Metadata } from "next";
import { ContactDetailsCard } from "@/components/sections/ContactDetailsCard";
import { ContactForm } from "@/components/sections/ContactForm";
import { OfficeMapEmbed } from "@/components/sections/OfficeMapEmbed";

export const metadata: Metadata = {
  title: "Contact · Ecolery",
  description:
    "Partnership, bulk orders, press or school visits. Reach Ecolery by phone, email or in person at our Dhaka office.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
      <ContactDetailsCard />
      <OfficeMapEmbed />
    </main>
  );
}
