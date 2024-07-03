import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to SaaS Startup</h1>
        <p className="text-xl text-muted-foreground">Revolutionizing the way you manage your business.</p>
        <Button size="lg" className="mt-4">Get Started</Button>
        <img src="https://placehold.co/600x400" alt="placeholder" className="mx-auto mt-8" />
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>John Doe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"This product has changed the way we do business. Highly recommend!"</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Jane Smith</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"An essential tool for our daily operations. Fantastic support team!"</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Pricing Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$10/month</p>
              <p>Basic features included.</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle>Popular Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$20/month</p>
              <p>Most popular features included.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$30/month</p>
              <p>All features included.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="space-y-4 text-center">
        <Separator />
        <div className="flex justify-center space-x-4">
          <a href="/about" className="text-muted-foreground">About</a>
          <a href="/contact" className="text-muted-foreground">Contact</a>
          <a href="/privacy" className="text-muted-foreground">Privacy Policy</a>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" className="text-muted-foreground">Facebook</a>
          <a href="https://twitter.com" className="text-muted-foreground">Twitter</a>
          <a href="https://linkedin.com" className="text-muted-foreground">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;