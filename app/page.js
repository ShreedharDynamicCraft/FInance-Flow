"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  PieChart, 
  Wallet,
  Users,
  Target,
  Award,
  Github,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Brain,
  CreditCard
} from "lucide-react";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and predictions based on your spending patterns and financial goals.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Smart Analytics",
      description: "Advanced charts and metrics that help you understand where your money goes and how to optimize it.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Bank-Level Security",
      description: "Your financial data is protected with enterprise-grade encryption and security protocols.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Real-time Updates",
      description: "Instant notifications and live updates on your transactions, budgets, and financial health.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <PieChart className="w-8 h-8 text-indigo-600" />,
      title: "Budget Management",
      description: "Create and manage budgets with automatic categorization and spending limit alerts.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-red-600" />,
      title: "Multi-Account Support",
      description: "Connect all your bank accounts, credit cards, and investment accounts in one place.",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  const stats = [
    { value: "10K+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { value: "$2M+", label: "Money Tracked", icon: <Wallet className="w-6 h-6" /> },
    { value: "99.9%", label: "Uptime", icon: <Target className="w-6 h-6" /> },
    { value: "4.9/5", label: "User Rating", icon: <Award className="w-6 h-6" /> }
  ];

  const steps = [
    {
      number: "01",
      title: "Connect Your Accounts",
      description: "Securely link your bank accounts and credit cards with our encrypted connection system."
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our AI engine analyzes your spending patterns and provides personalized insights."
    },
    {
      number: "03",
      title: "Take Action",
      description: "Get actionable recommendations and start optimizing your financial health today."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      avatar: "SC",
      quote: "This platform has completely transformed how I manage my finances. The AI insights are incredibly accurate!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Small Business Owner",
      avatar: "MR",
      quote: "Finally, a financial tool that understands my business needs. The analytics are game-changing.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Marketing Manager",
      avatar: "EW",
      quote: "Love the clean interface and smart notifications. It's like having a personal financial advisor.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-700" />
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">AI-Powered Financial Intelligence</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              Smart Money
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your financial life with AI-powered insights, automated tracking, 
              and intelligent recommendations that help you make smarter money decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
             
              
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg border-2 hover:bg-gray-50 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/ShreedharDynamicCraft" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 w-5 h-5" />
                 Source code -  View on GitHub
                </a>
              </Button>
            </div>
            
            {/* Dashboard Preview */}
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 scale-105" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Financial Dashboard</h3>
                  </div>
                  <div className="text-sm text-gray-500">Last updated: 2 min ago</div>
                </div>
                
                {/* Dashboard Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Balance Cards */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white">
                        <div className="text-sm opacity-90">Total Balance</div>
                        <div className="text-2xl font-bold">$12,847.50</div>
                        <div className="text-sm opacity-75">+2.5% this month</div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 text-white">
                        <div className="text-sm opacity-90">Monthly Budget</div>
                        <div className="text-2xl font-bold">$3,200</div>
                        <div className="text-sm opacity-75">$1,200 remaining</div>
                      </div>
                    </div>
                    
                    {/* Chart Area */}
                    <div className="bg-gray-50 rounded-xl p-4 h-32">
                      <div className="flex items-end justify-between h-full gap-2">
                        {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t opacity-80" 
                               style={{height: `${height}%`}} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Recent Transactions */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Recent Activity</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                          </div>
                          <span className="text-gray-700">Grocery Store</span>
                        </div>
                        <span className="font-medium text-red-600">-$89.50</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                          </div>
                          <span className="text-gray-700">Salary Deposit</span>
                        </div>
                        <span className="font-medium text-green-600">+$3,200</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          </div>
                          <span className="text-gray-700">Netflix</span>
                        </div>
                        <span className="font-medium text-red-600">-$15.99</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* AI Insights */}
                <div className="mt-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">AI Insight</h4>
                      <p className="text-sm text-gray-600">You're spending 23% less on dining out this month. Consider allocating the savings to your emergency fund!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to take control of your financial future, powered by cutting-edge AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in minutes with our simple, secure onboarding process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2 z-0" />
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              What Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied users who've transformed their financial lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-500" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of users who are already managing their finances smarter. 
            Start your free trial today and see the difference AI can make.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
           
            
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/ShreedharDynamicCraft" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 w-5 h-5" />
                Explore Code
              </a>
            </Button>
          </div>
          
      
        </div>
      </section>
    </div>
  );
};

export default LandingPage;