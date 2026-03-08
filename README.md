# MD Nymur Reza | Portfolio

This is a modern, professional developer portfolio built with HTML, Tailwind CSS, and Vanilla JavaScript.

## Features

- **Glassmorphism Design**: Modern and clean aesthetic.
- **Dark/Light Mode**: Persists user preference.
- **Responsive**: Mobile-first approach.
- **Animations**: Smooth scroll reveal (AOS) and typing effects (Typed.js).
- **Project Filtering**: Browse projects by category.
- **GitHub Integration**: Real-time stats and language breakdown.
- **Contact Form**: Integrated with EmailJS (serverless).
- **SEO Optimized**: Meta tags for better search visibility.
- **Visitor Counter**: Real-time profile hits.

## Deployment to GitHub Pages

1. **Create a Repository**: Create a new repository on GitHub (e.g., `MdNymurReza.github.io`).
2. **Upload Files**: Upload `index.html`, `CNAME`, and the `src/` folder.
3. **Settings**:
   - Go to **Settings** > **Pages**.
   - Select the `main` branch as the source.
   - Click **Save**.
4. **Custom Domain**:
   - If you have a custom domain (`nymurreza.com`), ensure the `CNAME` file is present in the root.
   - Update your DNS settings (A records and CNAME) to point to GitHub's servers.

## EmailJS Setup

To make the contact form functional:
1. Sign up at [emailjs.com](https://www.emailjs.com/).
2. Create an Email Service and a Template.
3. In `src/script.js`, replace `"YOUR_PUBLIC_KEY"` with your actual Public Key.
4. Update the `emailjs.sendForm` call with your `SERVICE_ID` and `TEMPLATE_ID`.

## Credits

- Icons: [Lucide](https://lucide.dev/)
- Animations: [AOS](https://michalsnik.github.io/aos/)
- Typing Effect: [Typed.js](https://mattboldt.com/demos/typed-js/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
