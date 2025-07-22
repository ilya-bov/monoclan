"use client";
import { useState } from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message, company, phone } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'New Message from Demo Page',
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Message:</strong> ${message}<br/>
        <strong>Company:</strong> ${company}<br/>
        <strong>Phone:</strong> ${phone}<br/>
      `,
    });

    if (error) {
      return console.error({ error });
    }

    console.log({ data });
    // Optionally reset the form or show a success message
    setFormData({ name: '', email: '', message: '', company: '', phone: '' });
  };

  return (
    <>
      <div className="mb-2">
        <h1 className="text-4xl font-bold">Связаться с нами</h1>
      </div>

      <p
        className="mb-8 text-lg text-gray-700"
      >
        Расскажите немного о себе — мы свяжемся с вами в течение 24 часов.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Ваше имя
            </label>
            <input
              id="name"
              className="form-input w-full py-2"
              type="text"
              placeholder="Иван Петров"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="company"
            >
              Название компании
            </label>
            <input
              id="company"
              className="form-input w-full py-2"
              type="text"
              placeholder="ООО Аксель"
              required
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Рабочая почта
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              placeholder="my@email.com"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Рабочий телефон
            </label>
            <input
              id="phone"
              className="form-input w-full py-2"
              type="text"
              placeholder="+7 (999) 123-89-07"
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="caseDescription"
            >
              Расскажите о вашем кейсе
            </label>
            <textarea
              id="caseDescription"
              className="form-input w-full py-2"
              placeholder="Опишите ваш кейс здесь..."
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <button className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
            Отправить
          </button>
          {/* <div className="text-center text-sm italic text-gray-400">Or</div>
          <button className="btn w-full bg-linear-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
            Continue with GitHub
          </button> */}
        </div>
      </form>

      {/* Bottom link */}
      {/* <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          By signing up, you agree to the{" "}
          <a
            className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
            href="#0"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
            href="#0"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div> */}
    </>
  );
}
