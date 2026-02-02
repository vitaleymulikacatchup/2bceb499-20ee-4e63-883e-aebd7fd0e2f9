"use client";

import { useEffect, useState } from "react";
import ReactLenis from "lenis/react";
import BlogCardThree from "@/components/sections/blog/BlogCardThree";
import FooterCard from "@/components/sections/footer/FooterCard";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import { Instagram, Facebook, Twitter } from "lucide-react";

type BlogPost = {
    id: string;
    category: string;
    title: string;
    excerpt: string;
    imageSrc: string;
    imageAlt?: string;
    authorName: string;
    authorAvatar: string;
    date: string;
    onBlogClick?: () => void;
};

const defaultPosts: BlogPost[] = [
    {
        id: "1",        category: "Design",        title: "UX review presentations",        excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",        imageSrc: "/placeholders/placeholder3.avif",        imageAlt: "Abstract design with purple and silver tones",        authorName: "Olivia Rhye",        authorAvatar: "/placeholders/placeholder3.avif",        date: "20 Jan 2025",        onBlogClick: () => console.log("Blog 1 clicked"),
    },
    {
        id: "2",        category: "Development",        title: "Building scalable applications",        excerpt: "Learn the best practices for building applications that can handle millions of users.",        imageSrc: "/placeholders/placeholder4.webp",        imageAlt: "Development workspace",        authorName: "John Smith",        authorAvatar: "/placeholders/placeholder4.webp",        date: "18 Jan 2025",        onBlogClick: () => console.log("Blog 2 clicked"),
    },
    {
        id: "3",        category: "Marketing",        title: "Content strategy essentials",        excerpt: "Discover how to create a content strategy that drives engagement and conversions.",        imageSrc: "/placeholders/placeholder3.avif",        imageAlt: "Marketing strategy board",        authorName: "Sarah Johnson",        authorAvatar: "/placeholders/placeholder3.avif",        date: "15 Jan 2025",        onBlogClick: () => console.log("Blog 3 clicked"),
    },
    {
        id: "4",        category: "Product",        title: "Product management 101",        excerpt: "Everything you need to know to become an effective product manager in 2025.",        imageSrc: "/placeholders/placeholder4.webp",        imageAlt: "Product planning session",        authorName: "Mike Davis",        authorAvatar: "/placeholders/placeholder4.webp",        date: "12 Jan 2025",        onBlogClick: () => console.log("Blog 4 clicked"),
    },
];

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>(defaultPosts);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

                if (!apiUrl || !projectId) {
                    console.warn("NEXT_PUBLIC_API_URL or NEXT_PUBLIC_PROJECT_ID not configured, using default posts");
                    setIsLoading(false);
                    return;
                }

                const url = `${apiUrl}/posts/${projectId}?status=published`;
                const response = await fetch(url, {
                    method: "GET",                    headers: {
                        "Content-Type": "application/json"},
                });

                if (response.ok) {
                    const resp = await response.json();
                    const data = resp.data;
                    if (Array.isArray(data) && data.length > 0) {
                        const mappedPosts = data.map((post: any) => ({
                            id: post.id || String(Math.random()),
                            category: post.category || "General",                            title: post.title || "Untitled",                            excerpt: post.excerpt || post.content.slice(0, 30) || "",                            imageSrc: post.imageUrl || "/placeholders/placeholder3.avif",                            imageAlt: post.imageAlt || post.title || "",                            authorName: post.author?.name || "Anonymous",                            authorAvatar: post.author?.avatar || "/placeholders/placeholder3.avif",                            date: post.date || post.createdAt || new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
                            onBlogClick: () => console.log(`Blog ${post.id} clicked`),
                        }));
                        setPosts(mappedPosts);
                    }
                } else {
                    console.warn(`API request failed with status ${response.status}, using default posts`);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <ThemeProvider
            defaultButtonVariant="expand-hover"
            defaultTextAnimation="entrance-slide"
            borderRadius="pill"
            contentWidth="mediumLarge"
            sizing="largeSizeMediumTitles"
            background="none"
            cardStyle="gradient-mesh"
            primaryButtonStyle="shadow"
            secondaryButtonStyle="layered"
            headingFontWeight="semibold"
        >
            <ReactLenis root>
                <div className="min-h-screen bg-background">
                    <NavbarLayoutFloatingInline
                        brandName="Bibbio"
                        navItems={[
                            { name: "Home", id: "/" },
                            { name: "About", id: "about" },
                            { name: "Products", id: "products" },
                            { name: "Reviews", id: "testimonials" },
                            { name: "Contact", id: "contact" }
                        ]}
                        button={{ text: "Order Now", href: "#contact" }}
                    />

                    {isLoading ? (
                        <div className="w-content-width mx-auto py-20 text-center">
                            <p className="text-foreground">Loading posts...</p>
                        </div>
                    ) : (
                        <BlogCardThree
                            blogs={posts}
                            title="Coffee Chronicles"
                            description="Discover the stories behind every cup, brewing tips, and the latest from our coffee community"
                            tag="Blog"
                            textboxLayout="default"
                            useInvertedBackground="noInvert"
                            carouselMode="buttons"
                            animationType="slide-up"
                            uniformGridCustomHeightClasses="min-h-[600px]"
                        />
                    )}

                    <FooterCard
                        logoText="Bibbio"
                        copyrightText="© 2024 Bibbio Coffeeshop. All rights reserved."
                        socialLinks={[
                            {
                                icon: Instagram,
                                href: "https://instagram.com/bibbio",                                ariaLabel: "Follow us on Instagram"
                            },
                            {
                                icon: Facebook,
                                href: "https://facebook.com/bibbio",                                ariaLabel: "Follow us on Facebook"
                            },
                            {
                                icon: Twitter,
                                href: "https://twitter.com/bibbio",                                ariaLabel: "Follow us on Twitter"
                            }
                        ]}
                        ariaLabel="Site footer"
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}