"use client";

import { useState, type FormEvent } from "react";
import FadeIn from "./FadeIn";

interface ContactFormProps {
    dict: {
        labels: {
            name: string;
            email: string;
            message: string;
        };
        placeholders: {
            name: string;
            email: string;
            message: string;
        };
        submit: string;
        sending: string;
        successTitle: string;
        successMessage: string;
        error: string;
    };
}

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ dict }: ContactFormProps) {
    const [state, setState] = useState<FormState>("idle");
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setState("submitting");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!response.ok) throw new Error("API call failed");

            setState("success");
        } catch {
            setState("error");
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (state === "success") {
        return (
            <div className="border border-accent/30 bg-surface p-8 text-center" role="alert">
                <p className="font-serif text-2xl text-foreground mb-2">
                    {dict.successTitle}
                </p>
                <p className="text-muted font-sans text-sm">
                    {dict.successMessage}
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
            className="flex flex-col gap-6"
        >
            {/* Name */}
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="name"
                    className="text-xs text-muted font-sans tracking-[0.15em] uppercase"
                >
                    {dict.labels.name} <span aria-hidden="true">*</span>
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border px-4 py-3 text-foreground font-sans text-sm placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder={dict.placeholders.name}
                    aria-required="true"
                />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="email"
                    className="text-xs text-muted font-sans tracking-[0.15em] uppercase"
                >
                    {dict.labels.email} <span aria-hidden="true">*</span>
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border px-4 py-3 text-foreground font-sans text-sm placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder={dict.placeholders.email}
                    aria-required="true"
                />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="message"
                    className="text-xs text-muted font-sans tracking-[0.15em] uppercase"
                >
                    {dict.labels.message} <span aria-hidden="true">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border px-4 py-3 text-foreground font-sans text-sm placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
                    placeholder={dict.placeholders.message}
                    aria-required="true"
                />
            </div>

            {/* Error message */}
            {state === "error" && (
                <p className="text-red-400 font-sans text-sm" role="alert">
                    {dict.error}
                </p>
            )}

            {/* Submit */}
            <button
                type="submit"
                disabled={state === "submitting"}
                aria-busy={state === "submitting"}
                className="self-start inline-flex items-center justify-center px-8 py-3.5 bg-accent text-background font-sans text-sm tracking-wider uppercase hover:bg-foreground transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {state === "submitting" ? dict.sending : dict.submit}
            </button>
        </form>
    );
}
