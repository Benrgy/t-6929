
import React from 'react';
import NewsletterSection from './NewsletterSection';
import ContactSection from './ContactSection';
import ReviewsSection from './ReviewsSection';
import TestimonialsSection from './TestimonialsSection';
import UserTipsSection from './UserTipsSection';
import BlogSection from './BlogSection';

const PageSections: React.FC = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div className="container mx-auto px-4">
        <NewsletterSection />
        <ContactSection />
      </div>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* User Tips Section */}
      <UserTipsSection />

      {/* Blog Section */}
      <div id="blog">
        <BlogSection />
      </div>
    </>
  );
};

export default PageSections;
