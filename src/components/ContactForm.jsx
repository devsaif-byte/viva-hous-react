import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { Link } from 'react-router-dom';

function ContactForm() {
  return (
    <form className="flex max-w-md flex-col gap-4 border-none">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your name" />
        </div>
        <TextInput id="name" type="text" placeholder="Folly Huck" addon="@" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="email" placeholder="sillybananas@email.com" addon="📧" required shadow />
      </div>

      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your message" />
        </div>
        <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
      </div>

      <Button type="submit">Send Message</Button>
    </form>
  );
}
export default ContactForm;
