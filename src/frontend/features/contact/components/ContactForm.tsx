import { useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { Button } from '@/frontend/components/button/Button';
import { Card } from '@/frontend/components/card/Card';
import { Input } from '@/frontend/components/form/Input';
import { Label } from '@/frontend/components/form/Label';
import { Textarea } from '@/frontend/components/form/Textarea';
import { contactService } from '../services';
import type { ContactFormStatusType } from '../types';

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<ContactFormStatusType>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await contactService.SendMessage({
        title: formData.get('title') as string,
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
      });
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <Card className="reveal rounded-[22px] bg-ink-900/85 p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink-50">
        Or drop me a message
      </h3>
      <p className="mt-1.5 text-sm text-ink-400">A role, a project, or just a hello — it lands straight in my inbox.</p>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((field) => (
            <div key={field.name}>
              <Label htmlFor={`contact-${field.name}`}>{field.label}</Label>
              <Input
                id={`contact-${field.name}`}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
              />
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Label htmlFor="contact-title">Title</Label>
          <Input id="contact-title" name="title" placeholder="What's this about?" required />
        </div>
        <div className="mt-5">
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell me a bit about it..."
            required
          />
        </div>

        <Button
          type="submit"
          disabled={status === 'sending' || status === 'success'}
          className="mt-6 w-full"
        >
          {status === 'sending' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle2 size={16} />
              Message sent successfully!
            </>
          ) : status === 'error' ? (
            <>
              <AlertCircle size={16} />
              Failed to send — try again
            </>
          ) : (
            <>
              <Send size={16} />
              Send message
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
