# Woolara - Cashmere Yarn Website

A beautiful Jekyll website for Woolara, showcasing luxurious cashmere yarn from Inner Mongolia. This site is designed to be hosted on GitHub Pages.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, elegant design with a warm color palette
- **Product Showcase**: Individual pages for each yarn type with detailed specifications
- **Brand Story**: Dedicated page telling the story of sustainable cashmere sourcing
- **Contact Form**: Functional contact form for customer inquiries
- **SEO Optimized**: Proper meta tags and structured content

## Color Palette

- **Cashmere Beige**: #F8F5F1
- **Olive Gray**: #A7A69D
- **Earth Taupe**: #D6C6B8
- **Wool Brown**: #BDA183
- **Charcoal**: #333333
- **Cream White**: #F3ECE6
- **Forest Green**: #5B6D50

## Setup Instructions

### Prerequisites

- Ruby (version 2.7 or higher)
- Bundler gem
- Git

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/woolara.git
   cd woolara
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Run the site locally**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site**:
   Open your browser and go to `http://localhost:4000`

### GitHub Pages Deployment

1. **Create a new repository** on GitHub named `woolara` (or your preferred name)

2. **Update the _config.yml file**:
   - Change the `url` to your GitHub Pages URL: `https://yourusername.github.io`
   - If using a custom domain, update accordingly

3. **Push your code**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/woolara.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

5. **Your site will be available** at `https://yourusername.github.io/woolara`

## Customization

### Adding Images

1. Create the `assets/images/` directory
2. Add your images with the following naming convention:
   - `hero-bg.jpg` - Main hero background image
   - `who-we-are.jpg` - Who we are section image
   - `our-cashmere.jpg` - Our cashmere section image
   - `yarn-collection-preview.jpg` - Yarn collection preview
   - `light-taupe-yarn.jpg` - Light taupe yarn image
   - `hazelnut-yarn.jpg` - Hazelnut yarn image
   - `natural-yarn.jpg` - Natural yarn image
   - `cashmere-hero.jpg` - Story page hero image
   - `cashmere-combing.jpg` - Cashmere combing process
   - `hand-combing-detail.jpg` - Detailed combing image
   - `ethical-farming.jpg` - Ethical farming image
   - Individual yarn detail images for each product

### Updating Contact Information

1. Edit `contact.html`
2. Update the email address and physical address
3. Replace the Formspree form action with your own form handler

### Adding Purchase Links

1. Replace all instances of `https://your-purchasing-link.com` with your actual e-commerce URL
2. Replace `https://your-crowdfunding-link.com` with your crowdfunding campaign URL

### Contact Form Setup

The contact form uses Formspree for handling submissions. To set it up:

1. Go to [Formspree.io](https://formspree.io)
2. Create an account and get your form endpoint
3. Replace `https://formspree.io/f/your-form-id` in `contact.html` with your actual endpoint

## File Structure

```
woolara/
├── _config.yml           # Jekyll configuration
├── _layouts/
│   ├── default.html      # Main layout template
│   └── yarn.html         # Yarn detail page layout
├── _yarns/               # Yarn collection items
│   ├── soft-bold.md
│   ├── everyday-luxury.md
│   ├── feather-light.md
│   └── supreme-edition.md
├── assets/
│   ├── css/
│   │   └── main.css      # Main stylesheet
│   └── images/           # Image assets (add your images here)
├── index.html            # Home page
├── yarn-collection.html  # Yarn collection page
├── story.html           # Brand story page
├── contact.html         # Contact page
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Pages Overview

### Home Page (`index.html`)
- Hero section with call-to-action buttons
- Three-column feature section
- Featured yarns showcase
- Crowdfunding progress section

### Yarn Collection (`yarn-collection.html`)
- Grid layout of all available yarns
- Links to individual yarn detail pages
- Purchase call-to-action

### Individual Yarn Pages (`_yarns/*.md`)
- Detailed product information
- Specifications table
- Purchase buttons
- Back to collection navigation

### Story Page (`story.html`)
- Brand story and sourcing information
- Information about sustainable practices
- Certification badges

### Contact Page (`contact.html`)
- Contact form
- Company information
- Purchase call-to-action

## Support

For questions about this website template, please create an issue in the repository or contact the development team.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 