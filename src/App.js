import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Card Component
const Card = ({ className = "", children }) => (
  <div className={`bg-white rounded-2xl shadow-md p-4 ${className}`}>{children}</div>
);

const CardContent = ({ children }) => (
  <div className="mt-2">{children}</div>
);

// Button Component
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-xl ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Input Component
const Input = ({ className = "", ...props }) => (
  <input
    className={`border border-gray-300 rounded-xl px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
    {...props}
  />
);

// Textarea Component
const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`border border-gray-300 rounded-xl px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
    {...props}
  ></textarea>
);

const logo = "/Double_A_Logo_NoText.png"; // Use the updated logo file name

const Navbar = () => (
  <nav className="flex items-center justify-between p-4 shadow-md bg-white">
    <div className="flex items-center space-x-4">
      <img src={logo} alt="Double A Logo" className="h-12 w-auto rounded" />
      <h1 className="text-xl font-bold text-orange-600">Double A Properties and Homes</h1>
    </div>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/properties">Properties</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
    </div>
  </nav>
);

const Home = () => (
  <Card className="m-8 p-6">
    <CardContent>
      <div className="flex flex-col items-center mb-6">
        <img src={logo} alt="Double A Logo" className="h-28 w-auto mb-4" />
        <h2 className="text-2xl font-semibold">Welcome to Double A Properties and Homes</h2>
      </div>
      <p>Creating value with integrity — your trusted partner in real estate development, sales, and property management.</p>
    </CardContent>
  </Card>
);

const About = () => (
  <Card className="m-8 p-6">
    <CardContent>
      <h2 className="text-2xl font-semibold mb-4">About Us</h2>
      <p>Double A Properties and Homes Ltd. is a dynamic real estate company focused on providing affordable, secure, and valuable housing solutions.</p>
    </CardContent>
  </Card>
);

const Properties = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
    {[1, 2, 3].map(id => (
      <Card key={id} className="overflow-hidden">
        <img src={`/property${id}.jpg`} alt={`Property ${id}`} className="h-48 w-full object-cover" />
        <CardContent className="p-4">
          <h3 className="text-lg font-bold mb-2">Property {id}</h3>
          <p>Spacious 3-bedroom bungalow located in a serene estate.</p>
          <Button className="mt-2">View Details</Button>
        </CardContent>
      </Card>
    ))}
  </div>
);

const Gallery = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-8">
    {[1, 2, 3, 4, 5, 6].map(i => (
      <img key={i} src={`/gallery${i}.jpg`} alt={`Gallery ${i}`} className="rounded shadow" />
    ))}
  </div>
);

const Contact = () => (
  <Card className="m-8 p-6 max-w-xl mx-auto">
    <CardContent>
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" type="email" />
        <Textarea placeholder="Your Message" rows={4} />
        <Button type="submit">Send Message</Button>
      </form>
    </CardContent>
  </Card>
);

const Blog = () => (
  <Card className="m-8 p-6">
    <CardContent>
      <h2 className="text-2xl font-semibold mb-4">Our Blog</h2>
      <p>Stay tuned for insights on property investment and real estate trends.</p>
    </CardContent>
  </Card>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
