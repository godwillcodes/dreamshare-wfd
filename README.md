# 🌟 Dreamshare

## 🚀 Overview

Dreamshare is a hypothetical web application designed to connect users with popular movies and celebrities for unique holiday experiences. The application features a visually appealing and responsive layout based on a provided Figma template using TailwindCSS, ensuring compatibility across various devices and browsers.

🔗 [Live Website](https://dreamshare-wfd.vercel.app/)
📚 [Documentation](https://dreamshare-wfd.vercel.app/pdf/documentation.pdf)
🛠️ [GitHub Repository](https://github.com/yourusername/dreamshare)

### 📊 PageSpeed Insights Scores

- Performance: > 94
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🛠️ Tech Stack

- **Next.js**: Efficient server-side rendering for speed and SEO
- **Tailwind CSS**: Utility-first styling for responsive design
- **AOS (Animate on Scroll)**: Dynamic animations for user engagement
- **TMDb API**: Real-time access to movie and celebrity data
- **Vercel**: Seamless deployment and hosting
- **Google Tag Manager (GTM)**: Streamlined tracking and analytics management

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌟 Key Features

- 🎬 Display of Most Popular Movies (TMDb API Integration)
- 🌟 Display of Most Popular Celebrities (TMDb API Integration)
- 🔄 Dynamic Content Loading
- 🖼️ Modal for Additional Celebrities
- 📱 Responsive Design
- 🔍 SEO, Accessibility, Performance, and Best Practices Optimization
- 📊 Google Tag Manager Integration

## 📂 Project Structure

The project follows a modular structure based on the Next.js App Router paradigm:

- `public/`: Static assets
- `src/app/`: Core application logic and components
  - `components/`
    - `global/`: Reusable components (e.g., Footer, Header)
    - `home/`: Home page specific components

## 🔌 API Integration - TMDb

The project integrates the TMDb API to fetch and display popular movies and celebrities dynamically.

## 🚀 Deployment

Deployment is automated through GitHub and Vercel:

1. Develop features in local branches
2. Push changes to GitHub
3. Automated tests run via GitHub Actions
4. Merge approved changes to main branch
5. Vercel automatically deploys the application

## 🔧 Recommendations for Future Improvements

- Implement PWA with next/pwa
- Establish performance budgets
- Utilize a Content Delivery Network (CDN)
- Implement Incremental Static Regeneration (ISR)

## 📚 Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

## 🚀 Deployed on Vercel

This project is deployed on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
